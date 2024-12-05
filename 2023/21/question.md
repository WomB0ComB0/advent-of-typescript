# Advent of TypeScript 2023 - Day 21

What is Tic Tac Toe?

Tic-Tac-Toe is a two-player game where players alternate marking ❌s and ⭕s in a 3x3 grid, aiming to get three in a row.

fun fact:
Did you know that tic tac toe is widely considered to be the first computer video game ever created?! That's right! A S Douglas implemented it all the way back in 1952, the same year as the coronation of Queen Elizabeth II.

Solving Tic Tac Toe

Your goal for this challenge is to use TypeScript types to encode the game logic of Tic Tac Toe. Eventually, every game will end with one of the players winning or a draw.

prompt by Dimitri Mitropoulos of MiTS

## Initial Code
```typescript
type TicTacToeChip = '❌' | '⭕';
type TicTacToeEndState = '❌ Won' | '⭕ Won' | 'Draw';
type TicTacToeState = TicTacToeChip | TicTacToeEndState;
type TicTacToeEmptyCell = '  '
type TicTacToeCell = TicTacToeChip | TicTacToeEmptyCell;
type TicTacToeYPositions = 'top' | 'middle' | 'bottom';
type TicTacToeXPositions = 'left' | 'center' | 'right';
type TicTacToePositions = `${TicTacToeYPositions}-${TicTacToeXPositions}`;
type TicTactToeBoard = TicTacToeCell[][];
type TicTacToeGame = {
board: TicTactToeBoard;
state: TicTacToeState;
};

type EmptyBoard = [
['  ', '  ', '  '],
['  ', '  ', '  '],
['  ', '  ', '  ']
];

type NewGame = {
board: EmptyBoard;
state: '❌';
};

type TicTacToe = unknown;
```

## Tests
```typescript
import { Equal, Expect } from 'type-testing';

type test_move1_actual = TicTacToe<NewGame, 'top-center'>;
//   ^? type test_move1_actual = any
type test_move1_expected = {
board: [
[ '  ', '❌', '  ' ],
[ '  ', '  ', '  ' ],
[ '  ', '  ', '  ' ]
];
state: '⭕';
};
type test_move1 = Expect<Equal<test_move1_actual, test_move1_expected>>;

```