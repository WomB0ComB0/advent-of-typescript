// Helper type to extract variable declarations
type DecodeVariables<T extends string> = T extends `${string}let ${infer Name} =${infer Rest}`
  ? [Name, ...DecodeVariables<Rest>]
  : T extends `${string}const ${infer Name} =${infer Rest}`
    ? [Name, ...DecodeVariables<Rest>]
    : T extends `${string}var ${infer Name} =${infer Rest}`
      ? [Name, ...DecodeVariables<Rest>]
      : [];

// Helper type to extract variable usage
type DecodeCalls<T extends string> = T extends `${string}(${infer Name})${infer Rest}`
  ? [Name, ...DecodeCalls<Rest>]
  : [];

// Helper type to find unused variables
type AnBDash<A extends string[], B extends string[]> = A extends [infer First extends string, ...infer Rest extends string[]]
  ? First extends B[number]
    ? AnBDash<Rest, B>
    : [First, ...AnBDash<Rest, B>]
  : [];

// Main type
type Lint<T extends string> = {
  scope: {
    declared: DecodeVariables<T>,
    used: DecodeCalls<T>
  },
  unused: AnBDash<
    DecodeVariables<T>,
    DecodeCalls<T>
  >
};