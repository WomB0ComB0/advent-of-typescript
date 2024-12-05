/** because "dashing" implies speed */
type Dasher = '💨';

/** representing dancing or grace */
type Dancer = '💃';

/** a deer, prancing */
type Prancer = '🦌';

/** a star for the dazzling, slightly mischievous Vixen */
type Vixen = '🌟';

/** for the celestial body that shares its name */
type Comet = '☄️';

/** symbolizing love, as Cupid is the god of love */
type Cupid = '❤️';

/** representing thunder, as "Donner" means thunder in German */
type Donner = '🌩️';

/** meaning lightning in German, hence the lightning bolt */
type Blitzen = '⚡';

/** for his famous red nose */
type Rudolph = '🔴';

type Reindeer = Dasher | Dancer | Prancer | Vixen | Comet | Cupid | Donner | Blitzen | Rudolph;

type MapBox<N extends number> = [
  [[0, 0], [1, 0], [2, 0]],
  [[3, 0], [4, 0], [5, 0]],
  [[6, 0], [7, 0], [8, 0]],
  [[0, 1], [1, 1], [2, 1]],
  [[3, 1], [4, 1], [5, 1]],
  [[6, 1], [7, 1], [8, 1]],
  [[0, 2], [1, 2], [2, 2]],
  [[3, 2], [4, 2], [5, 2]],
  [[6, 2], [7, 2], [8, 2]],
][N];

// utils
type ToInt<T> = T extends `${infer N extends number}` ? N : never;
type Flatten<T extends any[][], $acc extends any[] = []> = T extends [
  infer Head extends any[],
  ...infer Tail extends any[][],
]
  ? Flatten<Tail, [...$acc, ...Head]>
  : $acc;
type FlattenSudoku<Sudoku extends Reindeer[][][]> = {
  [Row in keyof Sudoku]: Flatten<Sudoku[Row]>;
};
type CheckDuplicates<Cells extends Reindeer> = Reindeer extends Cells ? true : false;

// get a row, column and square
type GetRow<Sudoku extends Reindeer[][], Row extends number> = Sudoku[Row][number];
type GetColumn<Sudoku extends Reindeer[][], Column extends number> = Sudoku[number][Column];
type GetBox<
  Sudoku extends Reindeer[][][],
  N extends number,
  $Map extends number[][] = MapBox<N>,
> = Sudoku[$Map[number][0]][$Map[number][1]][number];

// Check rows, collumns and squares
type CheckRows<
  Sudoku extends Reindeer[][],
  $Iter extends number = ToInt<keyof Sudoku>,
> = $Iter extends number ? CheckDuplicates<GetRow<Sudoku, $Iter>> : false;
type CheckColumns<
  Sudoku extends Reindeer[][],
  $Iter extends number = ToInt<keyof Sudoku>,
> = $Iter extends number ? CheckDuplicates<GetColumn<Sudoku, $Iter>> : false;
type CheckBoxes<
  Sudoku extends Reindeer[][][],
  $Iter extends number = ToInt<keyof Sudoku>,
> = $Iter extends number ? CheckDuplicates<GetBox<Sudoku, $Iter>> : false;

// Final
type Validate<
  Sudoku extends Reindeer[][][],
  $flattenSudoku extends Reindeer[][] = FlattenSudoku<Sudoku>,
> = CheckRows<$flattenSudoku> | CheckColumns<$flattenSudoku> | CheckBoxes<Sudoku> extends true
  ? true
  : false;
