# Advent of TypeScript 2024 - Day 20

After discovering the elves' code automation scheme, 🎩Bernard was... impressed! But now he's sending it back along with every lazy elf's worst nightmare: more work...

[🎩Bernard] This is a good start, but we need to track which variables are actually being used. We can't have unused variables cluttering up our toy production scripts - who knows what kind of bugs that could cause!

The elves need to enhance their code analyzer to track both declared variables AND their usage. For each script, they need to report:

All variables that are declared (using let, const, or var)
All variables that are actually used (as function arguments)

For example, when analyzing:
let robotDog = "deluxe_model";
assembleToy(robotDog);
The analyzer should produce:
{
  declared: ["robotDog"],
  used: ["robotDog"]
}
And if variables are declared but never used (like in let teddyBear = "standard_model";), they should only appear in the declared array, not the used array.
Implement a type AnalyzeScope that performs this analysis, handling:

Variable declarations with any amount of whitespace
Function calls with variable references
Multiple declarations and usages in the same script
Empty or whitespace-only scripts

Hint
Consider breaking down the analysis into two parts: one for gathering declarations and another for finding usages. Remember that variables can be declared without being used, and whitespace can appear anywhere!

prompt by Travis Wagner

code by Josh Goldberg in honor of typescript-eslint
