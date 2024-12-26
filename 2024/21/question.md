# Advent of TypeScript 2024 - Day 21

After discovering the unused variables in the elves' code, 🎩Bernard has one more request...

[🎩Bernard] These scripts are getting better, but we need to track ALL the variables - both the ones being used AND the ones collecting dust. We had a close call where a toy almost got left out of its gift box because the variable was declared but never used - if we have to check all this by hand it's going to take forever and kids might not get their presents!

The elves need to improve their code analyzer one final time to create a complete linting tool that will:

Track all variable declarations and usage
Identify unused variables
Return everything in a single, organized report

For example, when analyzing this script:
let robotDog = "standard_model";
const giftBox = "premium_wrap";
var ribbon123 = "silk";

wrapGift(giftBox);
addRibbon(ribbon123);
The linter should produce:
{
  scope: {
    declared: ["robotDog", "giftBox", "ribbon123"],
    used: ["giftBox", "ribbon123"]
  },
  unused: ["robotDog"]  // robotDog was never put in the box!
}
Implement a type Lint that performs this analysis, handling:

All previous functionality (variable declarations and usage tracking)
Identification of unused variables in a separate unused array
Various amounts of whitespace, tabs, and empty lines
Empty scripts (which should return empty arrays for all fields)

Hint
Build upon your previous analyzers! The unused variables are those that appear in `declared` but not in `used`. Think about how you can compare these two arrays at the type level.

prompt by Travis Wagner

code by Josh Goldberg in honor of typescript-eslint
