# Advent of TypeScript 2024 - Day 4

[🎩Bernard (the head elf) presenting data to 🎅Santa showing how much harder it is for the Reindeer to make a living with their wages not changing since 2009 at the same time as housing prices rising dramatically AND high inflation over that period.]
[🎅Santa] FAKE DATA!! THIS IS FAKE DATA!!!!!  A FAKE DATA WITCH HUNT!!!
[🎩Bernard] Oh, sure, 🎅Santa, I spent all night cooking the books just to screw over a guy who still thinks Excel is a type of sleigh polish.
[🎅Santa] I've been around the block a few times, 🎩Bernard.  I know the trick you're pulling here.  We're a seasonal business.  You only gave me numbers for Q1 of every year.  But that's when our economy is always depressed after the height of the holiday season!
[🎩Bernard] I can't believe they let you run this place... 🎅Santa.. 🎅SANTA!!... We maintain a huge budgetary deficit that literally only ever seems to get larger and larger.  These numbers are not affected by the seasonality of our business.
[🎅Santa] I want to be able to give quarterly numbers.  And since 1975.
[🎩Bernard] This is the last time I'm doing this for you.  You're going to need to face the music.. and pretty soon!

When 🎅Santa uses this function, sometimes he'll want to pass a number, like survivalRatio(2009) and if he wants a specific quarter he'll pass survivalRatio('2009 Q2').  Our function needs to be able to handle both of these data types, not just numbers.

Hint
When you hear words like "both" you should start thinking about a TypeScript feature called _type unions_.  This special TypeScript syntax allows you to tell TypeScript that a variable might be one of multiple different data types, in this case `number` and `string`.

prompt by Dimitri Mitropoulos on behalf of Michigan TypeScript

code by Dimitri Mitropoulos on behalf of SquiggleConf>

## Initial Code
```typescript
minimumWage: 82.12546
```

## Tests
```typescript
},
"1986 Q3": {
housingIndex: 115.74266,
minimumWage: 81.69449
},
"1986 Q4": {
housingIndex: 117.02931,
minimumWage: 81.2034
},
"1987 Q1": {
housingIndex: 118.00854,
minimumWage: 80.44374
},
"1987 Q2": {
housingIndex: 118.26679,
minimumWage: 79.6754
},
"1987 Q3": {
housingIndex: 118.38172,
minimumWage: 78.92905
},
"1987 Q4": {
housingIndex: 118.24629,
minimumWage: 78.25353
},
"1988 Q1": {
housingIndex: 119.69701,
minimumWage: 77.64127
},
"1988 Q2": {
housingIndex: 120.40172,
minimumWage: 76.7927
},
"1988 Q3": {
housingIndex: 120.09261,
minimumWage: 75.8579
},
"1988 Q4": {
import type { Expect, Equal } from 'type-testing';
// We can pass numbers like `2009`:
const start = survivalRatio(2009);
type t0_actual = typeof start; // => type t0_actual = number
type t0_expected = number;   // => type t0_expected = number
type t0 = Expect<Equal<t0_actual, t0_expected>>;
const now = survivalRatio(2024);
type t1_actual = typeof now; // => type t1_actual = number
type t1_expected = number; // => type t1_expected = number
type t1 = Expect<Equal<t1_actual, t1_expected>>;
```