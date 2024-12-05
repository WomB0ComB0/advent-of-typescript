# Advent of TypeScript 2023 - Day 10

Christmas Street Suffix Tester

It's a little known fact that Santa's reindeer are orienteering experts. They're very particular, actually.

To do this work well, they need to do some basic validation on the addresses. There were hopes among some reindeer to introduce a validation library this year, but there was simply too much infighting.  It's kindof a mess. You see..

Comet and Vixen want to use Zod because they heard from a YouTuber they like that it's the best (they haven't actually looked ito anything else).
Cupid and Rudolph are simply too used to JSON Schema with AJV. They don't want to learn a new thing. They both had popular webpack plugins in the past that are no longer used by anyone and now they're a little bitter about change (in general).
Then you have Prancer. Prancer doesn't see the point in validation. Prance feels that validating inputs pollutes the code with type gymnastics that add ever so little joy to the development experience. Yep. Even the reindeer have one of these on their team in 2023.
Meanwhile, Blitzen is pushing hard for typia because it's so fast (naturally).
Dancer and Donner don't seem to ever be able to articulate their opinions and usually just follow the rest of the group.

The Type's API

So, for this year.. nothing fancy. We'll have to just write a StreetSuffixTester from scratch.

This type will take two generic arguments. The first is for the street, and the second is for the suffix we're testing against.

If the street ends with the suffix then the type should return true (otherwise, false).

prompt by Dimitri Mitropoulos of MiTS

## Initial Code
```typescript
type StreetSufixTester = unknown;
```

## Tests
```typescript
import { Expect, Equal } from 'type-testing';

type test_0_actual = StreetSuffixTester<'Candy Cane Way', 'Way'>;
//   ^? type test_0_actual = StreetSuffixTester<"Ca…
type test_0_expected = true;
type test_0 = Expect<Equal<test_0_expected, test_0_actual>>;

type test_1_actual = StreetSuffixTester<'Chocalate Drive', 'Drive'>;
//   ^? type test_1_actual = StreetSuffixTester<"Ch…
type test_1_expected = true;
type test_1 = Expect<Equal<test_1_expected, test_1_actual>>;

type test_2_actual = StreetSuffixTester<'Sugar Lane', 'Drive'>;
//   ^? type test_2_actual = StreetSuffixTester<"Su…
```