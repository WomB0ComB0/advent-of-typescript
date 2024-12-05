type AppendGood<T extends Record<string, unknown>> = {
  [Property in keyof T as `good_${string & Property}`]: T[Property];
};
