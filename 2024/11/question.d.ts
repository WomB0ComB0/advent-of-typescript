type Excuse<T> = new (excuses: Record<string, unknown>) => T extends { [K in keyof T]: infer V }
  ? `${Extract<keyof T, string>}: ${Extract<V, string>}`
  : never;