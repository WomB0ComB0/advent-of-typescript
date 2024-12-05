# Advent of TypeScript 2023 - Day 17

Rock, Paper, Scissors

It's Sunday and there's one week to go before the big day (Christmas Eve) when the elfs' work for the year will finally be complete. For the last 20 years the only game the elves have had to play together is StarCraft. They're looking for a fresh game to play.

So, they get the idea to try a Rock, Paper, Scissors tournament.

But the elves are sorta nerdy so they want to accomplish this using TypeScript types. The WhoWins should type to correctly determine the winner in a Rock-Paper-Scissors game. The first argument is the opponent and the second argument is you!

What's Rock, Paper, Scissors?

In case you haven't played it before, basically:

it's a two player game where each player picks one of three options: Rock (👊🏻), Paper (🖐🏾), and Scissors (✌🏽)
game rules:

Rock crushes Scissors (Rock wins)
Scissors cuts Paper (Scissors wins)
Paper covers Rock (Paper wins)
otherwise, a draw

prompt by Dimitri Mitropoulos of MiTS

## Initial Code
```typescript
type RockPaperScissors = '👊🏻' | '🖐🏾' | '✌🏽';

type WhoWins = unknown;

```

## Tests
```typescript
import { Expect, Equal } from 'type-testing';

type test_0_actual = WhoWins<'👊🏻', '🖐🏾'>;
//   ^? type test_0_actual = any
type test_0_expected = 'win';
type test_0 = Expect<Equal<test_0_expected, test_0_actual>>;

type test_1_actual = WhoWins<'👊🏻', '✌🏽'>;
//   ^? type test_1_actual = any
type test_1_expected = 'lose';
type test_1 = Expect<Equal<test_1_expected, test_1_actual>>;

type test_2_actual = WhoWins<'👊🏻', '👊🏻'>;
//   ^? type test_2_actual = any
```