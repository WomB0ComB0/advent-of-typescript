const compose =
    <F, G, H, A>(f: (a: A) => F, g: (a: F) => G, h: (a: G) => H) =>
    (a: A) => {
        return h(g(f(a)));
    };

const upperCase = <X extends string>(x: X) => x.toUpperCase() as Uppercase<X>;
const lowerCase = <X extends string>(x: X) => x.toLowerCase() as Lowercase<X>;
const firstChar = <X extends string>(x: X) => x[0] as X extends `${infer F}${infer B}` ? F : never;
const firstItem = <X extends any[]>(x: X) => x[0] as X[0];
const makeTuple = <X,>(x: X) => [x];
const makeBox = <X = any,>(value: X) => ({ value });