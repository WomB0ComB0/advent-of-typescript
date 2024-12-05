# Advent of TypeScript 2023 - Day 2

Christmas Cookie Inventory

Phew! Yesterday's tactic worked. Santa got down-and-dirty with the elves on the factory floor and they seem to have stopped planning their strike.

With one small exception.. Unfortunately, two pesky elves (Jingle and Jangle) have realized that the 300 year stock options vesting cliff that Santa put into the elves' contract isn't quite typical. Jingle and Jangle already joined forces with Hermey (who has nothing to lose because he'd rather be a dentist than make toys) and they're beginning to cause a fuss.

Santa noticed that a lot of this discussion is happening during cookie inventory. Help Santa speed up the process so these conversations are cut short.

Take a look at the cookieInventory variable in the tests. Your goal is to update CookieSurveyInput so that it will return a union of all of the names of the various different cookies.

Good luck! As Santa always says: "your hard work will pay off eventually, just be patient".

prompt by Dimitri Mitropoulos of MiTS

## Initial Code
```typescript
type CookieSurveyInput = unknown;
```

## Tests
```typescript
import { Expect, Equal } from "type-testing";

const cookieInventory = {
chocolate: 1,
sugar: 20,
gingerBread: 10,
peanutButter: 30,
snickeDoodle: 73,
}
type test_cookies_actual = CookieSurveyInput<typeof cookieInventory>;
//   ^? type test_cookies_actual = any
type test_cookies_expected = "chocolate" | "sugar" | "gingerBread" | "peanutButter" | "snickeDoodle";
type test_cookies = Expect<
Equal<
```