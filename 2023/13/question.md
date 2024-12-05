# Advent of TypeScript 2023 - Day 13

Count the Days

The elves are SPENT. They need some motivation. They are (literally) counting down the days until Christmas.

side note on performance bonuses..
Santa promised that this year they'd get a bonus on the 26th (as well as an extra 2 PAID days off over the course of the next year!). Santa actually promised this last year (and the year before) but no one got a bonus because (according to Santa) "global warming has caused rising sea levels which in turn has eaten coastline, causing a need for many repairs at some of the high-density apartment complexes Santa owns in Florida, resulting in lower cashflow for the parent organization". That's what he said, anyway.

So, as a small token of our appreciation, let's help the elves by implementing a type, DayCounter, that they can use to keep track of how many days are remaining before Christmas.

The first argument is the beginning of the count (inclusive), and the second argument is the last number to count to (also inclusive). It should return a union of numbers representing the remaining days.

prompt by Dimitri Mitropoulos of MiTS

## Initial Code
```typescript
type DayCounter = unknown;
```

## Tests
```typescript
import { Expect, Equal } from 'type-testing';

type TwelveDaysOfChristmas = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type test_0_actual = DayCounter<1, 12>;
//   ^? type test_0_actual = any
type test_0_expected = TwelveDaysOfChristmas;
type test_0 = Expect<Equal<test_0_expected, test_0_actual>>;

type DaysUntilChristmas =
| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
| 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20
| 21 | 22 | 23 | 24 | 25;
type test_1_actual = DayCounter<1, 25>;
//   ^? type test_1_actual = any
```