type Count<T, Item, $acc extends any[] = []> = T extends [infer Head, ...infer Tail]
  ? Head extends Item
    ? Count<Tail, Item, [...$acc, Head]>
    : Count<Tail, Item, $acc>
  : $acc['length'];
