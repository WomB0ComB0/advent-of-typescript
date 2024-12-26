# Advent of TypeScript 2024 - Day 19

Some of the lazier elves in the workshop are trying to automate their toy-making duties using code with a familiar syntax. Before 🎅Santa finds out about their automation scheme, the code needs to be parsed and validated by 🎩Bernard to make sure no corners are being cut!
Implement a type Parse that analyzes these scripts and breaks them down into their basic components. The scripts include:

Variable declarations (using let, const, or var)
Function calls (like wrapGift or buildToy)

For example, when an elf writes:
let teddyBear = "standard_model";
buildToy(teddyBear);
It needs to be decoded for 🎩Bernard's review as:
[
  {
    id: "teddyBear",
    type: "VariableDeclaration"
  },
  {
    argument: "teddyBear",
    type: "CallExpression"
  }
]
The code validator needs to handle:

Different ways of declaring variables (let, const, and var)
Any function call that takes a parameter
Various amounts of spacing, tabs, and empty lines (elves aren't great at formatting)

Hint
Use recursive type patterns with string template literals to decode the automation scripts step by step. Be careful with whitespace - elves are notoriously inconsistent with their formatting!

prompt by Travis Wagner

code by Josh Goldberg in honor of typescript-eslint
