type Fill<T, Length extends number, Arr extends readonly T[] = []> = Arr['length'] extends Length
  ? Arr
  : Fill<T, Length, [T, ...Arr]>;
type GetIndex<Arr extends readonly unknown[], Index> = Index extends keyof Arr
  ? Arr[Index]
  : GetIndex<[...Arr, ...Arr], Index>;
type Flatten<T> = T extends [infer First extends unknown[], ...infer Rest extends unknown[][]]
  ? [...First, ...Flatten<Rest>]
  : [];

type Gifts = ['🛹', '🚲', '🛴', '🏄'];

type Rebuild<List extends readonly number[], Arr extends readonly unknown[] = Gifts> = Flatten<{
  [K in keyof List]: Fill<GetIndex<Arr, K>, List[K]>;
}>;
