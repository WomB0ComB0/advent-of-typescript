type BoxToys<T, N extends number, $acc extends any[] = []> = N extends $acc['length']
  ? $acc
  : BoxToys<T, N, [...$acc, T]>;
