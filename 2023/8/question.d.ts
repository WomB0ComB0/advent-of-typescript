type RemoveNaughtyChildren<T extends Record<string, any>> = {
  [Prop in keyof T as Exclude<Prop, `naughty_${string}`>]: T[Prop];
};
