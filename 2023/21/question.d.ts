type TicTacToeChip = '❌' | '⭕';
type TicTacToeEndState = '❌ Won' | '⭕ Won' | 'Draw';
type TicTacToeState = TicTacToeChip | TicTacToeEndState;
type TicTacToeEmptyCell = '  ';
type TicTacToeCell = TicTacToeChip | TicTacToeEmptyCell;
type TicTacToeYPositions = 'top' | 'middle' | 'bottom';
type TicTacToeXPositions = 'left' | 'center' | 'right';
type TicTacToePositions = `${TicTacToeYPositions}-${TicTacToeXPositions}`;
type TicTactToeBoard = TicTacToeCell[][];
type TicTacToeGame = {
  board: TicTactToeBoard;
  state: TicTacToeState;
};

type EmptyBoard = [['  ', '  ', '  '], ['  ', '  ', '  '], ['  ', '  ', '  ']];

type NewGame = {
  board: EmptyBoard;
  state: '❌';
};

type YPositionMap = {
  top: 0;
  middle: 1;
  bottom: 2;
};

type XPositionMap = {
  left: 0;
  center: 1;
  right: 2;
};

interface Coords {
  Y: number;
  X: number;
}

type GetPosition<MOVE extends TicTacToePositions> =
  MOVE extends `${infer Y extends TicTacToeYPositions}-${infer X extends TicTacToeXPositions}`
    ? { Y: YPositionMap[Y]; X: XPositionMap[X] }
    : { Y: 0; X: 0 };

type MakeMove<POS extends Coords, CHIP extends TicTacToeChip, BOARD extends TicTactToeBoard> = {
  [I in keyof BOARD]: I extends `${POS['Y']}`
    ? BOARD[I] extends infer ROW extends TicTacToeCell[]
      ? {
          [J in keyof ROW]: J extends `${POS['X']}` ? CHIP : ROW[J];
        }
      : never
    : BOARD[I];
};

type CheckRow<
  BOARD extends TicTactToeBoard,
  ROWINDEX extends number,
  CHIP extends TicTacToeChip,
> = BOARD[ROWINDEX][0] extends CHIP
  ? BOARD[ROWINDEX][1] extends CHIP
    ? BOARD[ROWINDEX][2] extends CHIP
      ? true
      : false
    : false
  : false;

type CheckCol<
  BOARD extends TicTactToeBoard,
  COLINDEX extends number,
  CHIP extends TicTacToeChip,
> = BOARD[0][COLINDEX] extends CHIP
  ? BOARD[1][COLINDEX] extends CHIP
    ? BOARD[2][COLINDEX] extends CHIP
      ? true
      : false
    : false
  : false;

type AnyEmpty<BOARD extends TicTactToeBoard> = BOARD extends Array<infer Row>
  ? Row extends Array<infer Cell>
    ? TicTacToeEmptyCell extends Cell
      ? true
      : false
    : never
  : never;

type SetState<BOARD extends TicTactToeBoard, CHIP extends TicTacToeChip> = CheckRow<
  BOARD,
  0,
  CHIP
> extends true
  ? { board: BOARD; state: `${CHIP} Won` }
  : CheckRow<BOARD, 1, CHIP> extends true
    ? { board: BOARD; state: `${CHIP} Won` }
    : CheckRow<BOARD, 2, CHIP> extends true
      ? { board: BOARD; state: `${CHIP} Won` }
      : CheckCol<BOARD, 0, CHIP> extends true
        ? { board: BOARD; state: `${CHIP} Won` }
        : CheckCol<BOARD, 1, CHIP> extends true
          ? { board: BOARD; state: `${CHIP} Won` }
          : CheckCol<BOARD, 2, CHIP> extends true
            ? { board: BOARD; state: `${CHIP} Won` }
            : {
                board: BOARD;
                state: AnyEmpty<BOARD> extends true ? (CHIP extends '❌' ? '⭕' : '❌') : 'Draw';
              };

type CanSetState<
  BOARD extends TicTactToeBoard,
  POS extends Coords,
> = BOARD[POS['Y']][POS['X']] extends TicTacToeEmptyCell ? true : false;

type TicTacToe<
  GAME extends TicTacToeGame,
  MOVE extends TicTacToePositions,
  POS extends Coords = GetPosition<MOVE>,
  STATE extends TicTacToeState = GAME['state'],
  BOARD extends TicTactToeBoard = GAME['board'],
> = STATE extends TicTacToeChip
  ? CanSetState<BOARD, POS> extends true
    ? SetState<MakeMove<POS, STATE, BOARD>, STATE>
    : GAME
  : TicTacToe<NewGame, MOVE>;
