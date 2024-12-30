/** The core parser type */
type Parse<A extends Parser, B> = ReturnType<{ [Args]?: [B] } & A>;

/** Tries each parser in order until one succeeds */
interface Choice {
	<G>(g: Arg<this, G>): DoChoice<typeof g>;
}
interface DoChoice<G> {
	<S extends string>(s: Arg<this, S>): S extends typeof s ? Err<""> : DoneChoice<G, typeof s>;
}
type DoneChoice<G, S extends string> = G extends [infer H extends Parser, ...infer T]
	? ParseResult<H, S> extends infer Result
		? Result extends Ok<`${infer R}`, infer Data>
			? Ok<R, Data>
			: DoneChoice<T, S>
		: Err<S>
	: Err<S>;

/** Matches the end of input */
interface EOF {
	<S extends string>(s: Arg<this, S>): S extends typeof s ? Err<""> : DoneEOF<typeof s>;
}
type DoneEOF<S extends string> = S extends "" ? Ok<"", ""> : Err<S>;

/** Matches exactly one character/token */
interface Just {
	<J>(j: Arg<this, J>): DoJust<typeof j>;
}
interface DoJust<J> {
	<S extends string>(s: Arg<this, S>): S extends typeof s ? Err<""> : DoneJust<J, typeof s>;
}
type DoneJust<J, S extends string> = S extends `${infer L}${infer R}`
	? L extends J
		? Ok<R, L>
		: Err<S>
	: Err<S>;

/** Matches the left parser */
interface Left {
	<D extends [Parser, Parser]>(d: Arg<this, D>): DoLeft<typeof d>;
}
interface DoLeft<D extends [Parser, Parser]> {
	<S extends string>(s: Arg<this, S>): S extends typeof s ? Err<""> : DoneLeft<D, typeof s>;
}
type DoneLeft<D extends [Parser, Parser], S extends string> = ParseResult<D[0], S> extends Ok<
	`${infer R1}`,
	infer D1
>
	? ParseResult<D[1], R1> extends Ok<`${infer R2}`, any>
		? Ok<R2, D1>
		: Err<S>
	: Err<S>;

/** Matches zero or more of the parser */
interface Many0 {
	<P extends Parser>(p: Arg<this, P>): DoMany0<typeof p>;
}
interface DoMany0<P extends Parser> {
	<S extends string>(
		s: Arg<this, S>,
	): S extends typeof s ? Err<""> : DoneMany0<P, Ok<typeof s, []>>;
}
type DoneMany0<P extends Parser, O extends Ok<string, string[]>> = ParseResult<
	P,
	O["rest"]
> extends Ok<`${infer Rest}`, `${infer Data}`>
	? DoneMany0<P, Ok<Rest, [...O["data"], Data]>>
	: O;

/** Matches one or more of the parser */
interface Many1 {
	<P extends Parser>(p: Arg<this, P>): DoMany1<typeof p>;
}
interface DoMany1<P extends Parser> {
	<S extends string>(s: Arg<this, S>): S extends typeof s ? Err<""> : DoneMany1<P, typeof s>;
}
type DoneMany1<P extends Parser, S extends string> = ParseResult<P, S> extends Ok<
	`${infer Rest}`,
	`${infer Data}`
>
	? DoneMany0<P, Ok<Rest, [Data]>>
	: Err<S>;

/** Maps the parsed data using the provided mapper */
interface MapResult {
	<M extends [Parser, ...Mapper[]]>(m: Arg<this, M>): DoMapResult<typeof m>;
}
interface DoMapResult<M extends [Parser, ...Mapper[]]> {
	<S extends string>(s: Arg<this, S>): S extends typeof s ? Err<""> : DoneMapResult<M, typeof s>;
}
type DoneMapResult<M extends [Parser, ...Mapper[]], S extends string> = M extends [
	infer P extends Parser,
	...infer M extends Mapper[],
]
	? ParseResult<P, S> extends Ok<`${infer R}`, infer D>
		? DoneMapResultRest<Ok<R, D>, M>
		: Err<S>
	: Err<S>;
type DoneMapResultRest<Result extends MaybeResult, M extends Mapper[]> = Result extends {
	success: true;
}
	? M extends [infer L extends Mapper, ...infer R extends Mapper[]]
		? DoneMapResultRest<Ok<Result["rest"], ReturnType<({ data: Result["data"] } & L)["map"]>>, R>
		: Result
	: never;

/** A mapper is a function that transforms the parsed data */
interface Mapper {
	data: unknown;
	map: Parser;
}

/** Matches zero or one of the parser */
interface Maybe {
	<P extends Parser>(p: Arg<this, P>): DoMaybe<typeof p>;
}
interface DoMaybe<P extends Parser> {
	<S extends string>(s: Arg<this, S>): S extends typeof s ? Err<""> : DoneMaybe<P, typeof s>;
}
type DoneMaybe<P extends Parser, S extends string> = ParseResult<P, S> extends Ok<
	`${infer R}`,
	infer D
>
	? Ok<R, D>
	: Ok<S, "">;

/** A result type for parsers that may fail */
interface MaybeResult {
	data: unknown;
	rest: string;
	success: boolean;
}

/** Matches none of the characters/tokens */
interface NoneOf {
	<N extends string>(n: Arg<this, N>): DoNoneOf<typeof n>;
}
interface DoNoneOf<N extends string> {
	<S extends string>(s: Arg<this, S>): S extends typeof s ? Err<""> : DoneNoneOf<N, typeof s>;
}
type DoneNoneOf<N extends string, S extends string> = S extends `${infer L}${infer R}`
	? L extends N
		? Err<S>
		: Ok<R, L>
	: Err<S>;

/** Matches two parsers in sequence */
interface Pair {
	<D extends [Parser, Parser]>(d: Arg<this, D>): DoPair<typeof d>;
}
interface DoPair<D extends [Parser, Parser]> {
	<S extends string>(s: Arg<this, S>): S extends typeof s ? Err<""> : DonePair<D, typeof s>;
}
type DonePair<D extends [Parser, Parser], S extends string> = D extends [
	infer L extends Parser,
	infer R extends Parser,
]
	? ParseResult<L, S> extends Ok<`${infer R1}`, infer D1>
		? ParseResult<R, R1> extends Ok<`${infer R2}`, infer D2>
			? Ok<R2, [D1, D2]>
			: Err<S>
		: Err<S>
	: Err<S>;

/** A parser is a function that attempts to parse an input string */
type Parser = (...args: any) => any;

/** Matches the right parser */
interface Right {
	<D extends [Parser, Parser]>(d: Arg<this, D>): DoRight<typeof d>;
}
interface DoRight<D extends [Parser, Parser]> {
	<S extends string>(s: Arg<this, S>): S extends typeof s ? Err<""> : DoneRight<D, typeof s>;
}
type DoneRight<D extends [Parser, Parser], S extends string> = ParseResult<D[0], S> extends Ok<
	`${infer R1}`,
	any
>
	? ParseResult<D[1], R1> extends Ok<`${infer R2}`, infer D2>
		? Ok<R2, D2>
		: Err<S>
	: Err<S>;

/** Matches zero or more of the parser separated by the separator parser */
interface SepBy0 {
	<D extends [Parser, Parser]>(d: Arg<this, D>): DoSepBy0<typeof d>;
}
interface DoSepBy0<D extends [Parser, Parser]> {
	<S extends string>(s: Arg<this, S>): S extends typeof s ? Err<""> : DoneSepBy0<D, typeof s>;
}
type DoneSepBy0<D extends [Parser, Parser], S extends string> = ParseResult<D[0], S> extends Ok<
	`${infer Rest}`,
	infer Data
>
	? DoneSepBy0Rest<D, Ok<Rest, [Data]>>
	: Ok<S, []>;
type DoneSepBy0Rest<P extends [Parser, Parser], O extends Ok<string, unknown[]>> = ParseResult<
	P[1],
	O["rest"]
> extends Ok<`${infer R1}`, any>
	? ParseResult<P[0], R1> extends Ok<`${infer R2}`, infer D2>
		? DoneSepBy0Rest<P, Ok<R2, [...O["data"], D2]>>
		: O
	: O;

/** Matches two parsers in sequence */
interface Seq {
	<G extends Parser[]>(g: Arg<this, G>): DoSeq<typeof g>;
}
interface DoSeq<G extends Parser[]> {
	<S extends string>(
		s: Arg<this, S>,
	): S extends typeof s ? Err<""> : DoneSeq<G, Ok<typeof s, []>, typeof s>;
}
type DoneSeq<G extends Parser[], O extends Ok<string, unknown[]>, S extends string> = G extends [
	infer L extends Parser,
	...infer R extends Parser[],
]
	? ParseResult<L, O["rest"]> extends Ok<`${infer Rest}`, infer Data>
		? DoneSeq<R, Ok<Rest, [...O["data"], Data]>, S>
		: Err<S>
	: O;

/** Helpers */
const Args = Symbol("Args");
type Arg<F extends Parser, D = unknown, I extends number = 0> = F extends {
	[Args]?: [...infer Args];
}
	? Args[I]
	: D;
interface Ok<Rest extends string, Data = unknown> {
	data: Data;
	rest: Rest;
	success: true;
}
interface Err<Rest extends string> {
	data: unknown;
	rest: Rest;
	success: false;
}

type ParseResult<A extends Parser, B> = A extends (...args: any) => MaybeResult
	? Parse<A, B>
	: Parse<Parse<A, B>, B>;