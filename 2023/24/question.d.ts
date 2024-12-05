type Cell = '🎄' | '🎅' | '  ';
type Maze = Cell[][];
type Dir = 'up' | 'down' | 'left' | 'right';

type FindSantaCol<
  T extends Cell[],
  A extends any[] = [],
  AL extends number = A['length'],
> = AL extends T['length'] ? never : T[AL] extends '🎅' ? AL : FindSantaCol<T, ['', ...A]>;
type FindSanta<
  M extends Maze,
  I extends [any[], any[]] = [[], []],
> = '🎅' extends M[I[0]['length']][number]
  ? [I[0]['length'], FindSantaCol<M[I[0]['length']]>]
  : FindSanta<M, [['', ...I[0]], I[1]]>;

type MakeArr<L extends number, A extends any[] = []> = A['length'] extends L
  ? A
  : MakeArr<L, [...A, A['length']]>;
type SubOne<T extends number> = MakeArr<T> extends [infer F, ...infer R] ? R['length'] : -1;
type AddOne<T extends number> = [...MakeArr<T>, '']['length'];

type NextDir<D extends Dir, I extends number[]> = D extends 'left'
  ? [I[0], SubOne<I[1]>]
  : D extends 'up'
    ? [SubOne<I[0]>, I[1]]
    : D extends 'right'
      ? [I[0], AddOne<I[1]>]
      : D extends 'down'
        ? [AddOne<I[0]>, I[1]]
        : never;

type IsExit<M extends any[][], I extends number[]> = I extends
  | [-1 | M['length'], number]
  | [number, -1 | M[0]['length']]
  ? true
  : false;

type CookiesR<R extends any[]> = { [K in keyof R]: '🍪' };
type Cookies<T extends any[][]> = { [K in keyof T]: CookiesR<T[K]> };

type FillRow<
  T extends any[],
  C extends number,
  M extends string,
  A extends any[] = [],
  AL extends number = A['length'],
> = AL extends T['length'] ? A : FillRow<T, C, M, [...A, AL extends C ? M : T[AL]]>;

type MoveSanta<
  M extends Maze,
  I extends number[],
  S extends Cell,
  A extends Maze = [],
> = M extends [infer F extends Cell[], ...infer L extends Maze]
  ? A['length'] extends I[0]
    ? [...A, FillRow<F, I[1], S>, ...L]
    : MoveSanta<L, I, S, [...A, F]>
  : never;

type Move<M extends Maze, D extends Dir> = FindSanta<M> extends infer I1 extends number[]
  ? NextDir<D, I1> extends infer I2 extends number[]
    ? IsExit<M, I2> extends true
      ? Cookies<M>
      : M[I2[0]][I2[1]] extends '  '
        ? MoveSanta<MoveSanta<M, I1, '  '>, I2, '🎅'>
        : M
    : never
  : never;
