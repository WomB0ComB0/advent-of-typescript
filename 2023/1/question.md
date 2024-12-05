# Advent of TypeScript 2023 - Day 1

Christmas Cookies

It's December 1st! That means it's almost time for the big day! Santa has a preparation regimen that involves, of course, eating lots of delicious cookies.

Santa's elves have provided Santa an API whereby Santa can submit his favorite cookie flavors. This year his favorites are:

ginger-bread
chocolate-chip

But the elves have some kind of fancy code-gen build step (built in Rust, of course), so all Santa needs to do is update the SantasFavoriteCookies type to accept either of his favorite cookies.

Can you help?

prompt by Dimitri Mitropoulos of MiTS

## Initial Code
```typescript
type SantasFavoriteCookies = unknown;

```

## Tests
```typescript
import { Expect, Equal } from 'type-testing';

type test_0_actual = SantasFavoriteCookies;
//   ^? type test_0_actual = unknown
type test_0_expected = 'ginger-bread' | 'chocolate-chip';
type test_0 = Expect<Equal<test_0_actual, test_0_expected>>;
```