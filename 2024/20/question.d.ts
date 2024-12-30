type SplitOnLines<T extends string> = T extends `${infer First extends string}\n${infer Rest extends
    string}`
    ? [...SplitOnLines<Rest>, First]
    : T extends `${infer First extends string}\r${infer Rest extends string}`
        ? [...SplitOnLines<Rest>, First]
        : [""];

type GetDeclared<T extends string[], Acc extends any[] = []> = T extends [
    infer First extends string,
    ...infer Rest extends string[],
]
    ? First extends `${string}${"var" | "const" | "let"} ${infer id extends string} =${string}`
        ? GetDeclared<Rest, [id, ...Acc]>
        : GetDeclared<Rest, Acc>
    : Acc;

type GetUsed<T extends string[], Acc extends any[] = []> = T extends [
    infer First extends string,
    ...infer Rest extends string[],
]
    ? First extends `${string}(${infer arg extends string});`
        ? GetUsed<Rest, [arg, ...Acc]>
        : GetUsed<Rest, Acc>
    : Acc;

type AnalyzeScope<T extends string> = {
    declared: GetDeclared<SplitOnLines<T>>;
    used: GetUsed<SplitOnLines<T>>;
};