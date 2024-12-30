
type NaughtyOrNice<T extends string> = T extends `${any}${any}${infer R}`
    ? NaughtyOrNice<R>
    : T extends ""
        ? "naughty"
        : "nice";

type FormatNames<T> = {
    [I in keyof T]: T[I] extends [infer N extends string, any, `${infer C extends number}`]
        ? {
                name: N;
                count: C;
                rating: NaughtyOrNice<N>;
            }
        : T[I];
};