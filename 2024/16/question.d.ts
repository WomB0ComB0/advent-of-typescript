declare function DynamicParamsCurrying<F extends (...args: any[]) => boolean>(fn: F): Ret<F>;

type Ret<F> =
  F extends (...args: infer A) => infer R
    ? A extends []
      ? () => F
      : <P extends unknown[]>(
         ...args: P
             ) => P extends A
                 ? R
                 : A extends [...P, ...infer Re]
                         ? Ret<(...args: Re) => R>
                        : never
    : never;