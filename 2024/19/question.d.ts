type ExcludeAll<T extends string, Remove extends string> =
    T extends `${infer First}${Exclude<Remove, ''>}${infer Rest}` ? `${First}${ExcludeAll<Rest, Remove>}` : T

type FixInput<T extends string> = ExcludeAll<ExcludeAll<ExcludeAll<ExcludeAll<T, '\n'>, '\t'>, '\r'>, ' '>

type ParseLine<T extends string> =
    T extends `${'let' | 'const' | 'var'}${infer Id}=${any}`
        ? [{ id: Id, type: 'VariableDeclaration' }] : T extends `${any}(${infer Argument})`
                ? [{ argument: Argument, type: 'CallExpression' }]
                : []

type Parse<T extends string> =
    T extends `${infer Line};${infer Rest}`
        ? [...ParseLine<FixInput<Line>>, ...Parse<Rest>] : ParseLine<FixInput<T>>