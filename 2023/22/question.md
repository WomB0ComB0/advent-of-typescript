# Advent of TypeScript 2023 - Day 22

Reindeer Sudoku

Santa's reindeer sure do like to cause trouble! This time they've decided to make a game out of arranging themselves into a Sudoku board.

Before arranging themselves in this configuration, the reindeer left Santa a foreboding message:

SaNtA.... yOu MuSt ImPleMeNt ThE Validate TyPe To DeTerMinE WhEThEr OuR SuDokU ConFiGuRaTiOn Is vALid

Oh.. and what's that... also Vixen seems to have left a separate note

make sure Validate is a predicate

Vixen

Well that's sorta condescending. Vixen seems to be assuming we already know that a "predicate" is just a fancy computer science term for a function that returns true or false. Oh well. That's Vixen for you.

What is Sudoku

If you're not already familiar: Sudoku is a logic-based number placement puzzle. Here are the basic rules:

Grid Structure: The game is played on a 9x9 grid, divided into nine 3x3 subgrids or "regions."
Number Placement: The objective is to fill the grid with numbers from 1 to 9.
Row Constraint: Every row must contain each number from 1 to 9 without repeating.
Column Constraint: Every column must also contain each number from 1 to 9 without repeating.
Region Constraint: Each of the nine 3x3 regions must contain each number from 1 to 9, again without repetition.

Normally you solve the puzzle by logically deducing the numbers for the empty cells, ensuring that all rows, columns, and 3x3 regions have numbers from 1 to 9 according to the rules. However, in this case the cells are all already filled in and your mission is to instead determine whether the configuration follows the rules of Sudoku.

prompt by Dimitri Mitropoulos of MiTS

## Initial Code
```typescript
/** because "dashing" implies speed */
type Dasher = '💨';

/** representing dancing or grace */
type Dancer = '💃';

/** a deer, prancing */
type Prancer = '🦌';

/** a star for the dazzling, slightly mischievous Vixen */
type Vixen = '🌟';

/** for the celestial body that shares its name */
type Comet = '☄️';

/** symbolizing love, as Cupid is the god of love */
type Cupid = '❤️';

/** representing thunder, as "Donner" means thunder in German */
type Donner = '🌩️';

/** meaning lightning in German, hence the lightning bolt */
type Blitzen = '⚡';

/** for his famous red nose */
type Rudolph = '🔴';

type Reindeer = Dasher | Dancer | Prancer | Vixen | Comet | Cupid | Donner | Blitzen | Rudolph;

type Validate = unknown;

```

## Tests
```typescript
import { Equal, Expect } from 'type-testing';

type test_sudoku_1_actual = Validate<[
//   ^? type test_sudoku_1_actual = any
[['💨', '💃', '🦌'], ['☄️', '❤️', '🌩️'], ['🌟', '⚡', '🔴']],
[['🌟', '⚡', '🔴'], ['💨', '💃', '🦌'], ['☄️', '❤️', '🌩️']],
[['☄️', '❤️', '🌩️'], ['🌟', '⚡', '🔴'], ['💨', '💃', '🦌']],
[['🦌', '💨', '💃'], ['⚡', '☄️', '❤️'], ['🔴', '🌩️', '🌟']],
[['🌩️', '🔴', '🌟'], ['🦌', '💨', '💃'], ['⚡', '☄️', '❤️']],
[['⚡', '☄️', '❤️'], ['🌩️', '🔴', '🌟'], ['🦌', '💨', '💃']],
[['💃', '🦌', '💨'], ['❤️', '🌟', '☄️'], ['🌩️', '🔴', '⚡']],
[['🔴', '🌩️', '⚡'], ['💃', '🦌', '💨'], ['❤️', '🌟', '☄️']],
[['❤️', '🌟', '☄️'], ['🔴', '🌩️', '⚡'], ['💃', '🦌', '💨']]
]>;
```