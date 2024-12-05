type SantaListProtector<T extends Record<string, unknown>> = {
  readonly [K in keyof T]: T[K] extends Record<string, any>
    ? T[K] extends (...args: Array<unknown>) => unknown
      ? T[K]
      : SantaListProtector<T[K]>
    : T[K];
};
