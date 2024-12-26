# Advent of TypeScript 2024 - Day 22

[🎅Santa, bursting into the workshop, waving a piece of paper frantically] EMERGENCY! The sleigh's navigation system is sending messages about some kind of critical malfunction but I can't make heads or tails of it!
[🎩Bernard, grabbing the paper] Let me see that... Oh no. OH NO. It looks like JSON, but... with TRAILING COMMAS!? It's a MESS!
[⚡Blitzen, peering over their shoulders] Can't we just use JSON.parse()?
[🎩Bernard, gasps in horror] And risk a runtime error at 30,000 feet? On CHRISTMAS EVE?! We need something type-safe. Something that can catch these issues as early as possible. Something...
[🎅Santa, interrupting] Just fix it! If we can't parse these messages correctly, we might end up delivering presents to fish in the Pacific Ocean instead of children in the Pacific Northwest!

The elves need your help to build a type-safe JSON parser that can decode these critical messages from the sleigh! The parser should convert JSON strings into their equivalent TypeScript types, catching any errors as early as possible.
For example:
type test = Parse<`{
  "altitude": 123,
  "warnings": [
    "low_fuel",\t\n
    "strong_winds",
  ],
}`>;
// Should become:
type test = {
  altitude: 123;
  warnings: ["low_fuel", "strong_winds"];
};
The parser MUST handle:

Objects with string/number keys and any JSON value
Arrays with mixed types
Primitive values (strings, numbers, booleans, null)
Nested objects and arrays
Those dreaded trailing commas in objects and arrays
Various amounts of whitespace and newlines

Hint
Break this challenge into smaller parts, parsing each part of the JSON structure one at a time and building up to the full parser.

prompt by Travis Wagner

code by Dimitri Mitropoulos on behalf of SquiggleConf
