# Advent of TypeScript 2023 - Day 20

TypeScript ASCII Art!

Your goal for this challenge is to take an input like Hi and turn it into ASCII art!

So for example Hi would turn into:

█ █ █ 
█▀█ █ 
▀ ▀ █

but there's a twist!

You'll also need to handle newlines! Take a look at the tests to see some examples of that in action.

Enjoy!



...wait

....what's that.....

!! BREAKING NEWS JUST-IN FROM THE TYPEHERO INVESTIGATIVE REPORTING TEAM !!
We have just received word that the term "ASCII art" is commonly used to refer to text-based visual art in general. That means that although characters are not part of the ISO-8859-1 character encoding set, it's still ASCII art! We also just received word that pencil lead has actually been made of graphite since the 16th century but we all still call it "lead" even though it's not made from the 82nd atomic element, lead(!!).
News, Sports, and Weather at 11. Back to you Carol.

prompt by Dimitri Mitropoulos of MiTS

## Initial Code
```typescript
type Letters = {
A: [
'█▀█ ',
'█▀█ ',
'▀ ▀ ',
],
B: [
'█▀▄ ',
'█▀▄ ',
'▀▀  '
],
C: [
'█▀▀ ',
'█ ░░',
'▀▀▀ '
],
E: [
'█▀▀ ',
'█▀▀ ',
'▀▀▀ '
],
H: [
'█ █ ',
'█▀█ ',
'▀ ▀ '
],
I: [
'█ ',
'█ ',
'▀ '
],
M: [
'█▄░▄█ ',
'█ ▀ █ ',
'▀ ░░▀ '
],
N: [
'█▄░█ ',
```

## Tests
```typescript
import { Equal, Expect } from "type-testing";

type test_0_actual = ToAsciiArt<"   * : * Merry * : *   \n  Christmas  ">;
//   ^? type test_0_actual = any
type test_0_expected = [
"░░░░░#░░░█▄░▄█ █▀▀ █▀█ █▀█ █ █ ░░░#░░░░░",
"░░░#░░░#░█ ▀ █ █▀▀ ██▀ ██▀ ▀█▀ ░#░░░#░░░",
"░░░░░#░░░▀ ░░▀ ▀▀▀ ▀ ▀ ▀ ▀ ░▀ ░░░░#░░░░░",
"░░█▀▀ █ █ █▀█ █ █▀▀ ▀█▀ █▄░▄█ █▀█ █▀▀ ░░",
"░░█ ░░█▀█ ██▀ █ ▀▀█ ░█ ░█ ▀ █ █▀█ ▀▀█ ░░",
"░░▀▀▀ ▀ ▀ ▀ ▀ ▀ ▀▀▀ ░▀ ░▀ ░░▀ ▀ ▀ ▀▀▀ ░░",
];
type test_0 = Expect<Equal<test_0_actual, test_0_expected>>;

```