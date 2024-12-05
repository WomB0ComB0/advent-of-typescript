# Advent of TypeScript 2023 - Day 12

Find Santa

Strange as it may sound.. Santa went to college with someone that works at a big silicon valley networking company. They've been buddies for years. So much so that in 2023 Santa pushed the workshop's board until they approved budget to get WiFi on the entire campus. That way Santa can browse TikTok as he walks from building to building across the campus.

But after all that doomscrolling, Santa realized he has lost himself in a Christmas tree forest! A search team of elves has been deployed to find him, but he needs to give them more information about where he is among the trees.

FindSanta is a type that takes a tuple as its only argument and returns the index where Santa is located. Let's help Santa get back to the thing he's best at: inspiring leadership.

note: never is returned if Santa cannot be found among the trees

prompt by Dimitri Mitropoulos of MiTS

## Initial Code
```typescript
type FindSanta = unknown;
```

## Tests
```typescript
import { Expect, Equal } from 'type-testing';

type Forest0 = ['🎅🏼', '🎄', '🎄', '🎄'];
type test_0_actual = FindSanta<Forest0>;
//   ^? type test_0_actual = any
type test_0_expected = 0;
type test_0 = Expect<Equal<test_0_expected, test_0_actual>>;

type Forest1 = ['🎄', '🎅🏼', '🎄', '🎄', '🎄', '🎄'];
type test_1_actual = FindSanta<Forest1>;
//   ^? type test_1_actual = any
type test_1_expected = 1;
type test_1 = Expect<Equal<test_1_expected, test_1_actual>>;

```