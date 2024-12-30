type GetRoute<
  S extends string, 
  I extends string[] = [], 
  Acc extends [string, number][] = [], 
  start = true
> =
  S extends `${infer Head}-${infer Tail}`
    ? Head extends ''
      ? GetRoute<Tail, start extends false ? ['-', ...I]: [], Acc, start>
      : GetRoute<Tail, ['-'], [...Acc, [Head, I['length']]], false> 
    : S extends ''
      ? Acc
      : [...Acc, [S, I['length']]];