type ToInt<T> = T extends `${infer N extends number}` ? N : never;
type FindSanta<T extends string[]> = keyof {
  [K in keyof T as T[K] extends '🎅🏼' ? ToInt<K> : never]: unknown;
};
