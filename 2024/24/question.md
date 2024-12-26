# Advent of TypeScript 2024 - Day 24

[🎅Santa] First the elves needed a code parser, then we had that JSON situation... I'm starting to see a pattern here.
[🎩Bernard] We keep building one-off parsers for everything! Maybe we should create a reusable parsing system?
[🎅Santa] Like some sort of parser factory? That's brilliant! We could use it for everything - toy specs, route planning... uh... everything!
[🎩Bernard] Right... I'll get started on the design.

The elves need your help building a type-safe parser combinator system! Instead of creating individual parsers for each format, you'll create building blocks that can be combined to parse anything.
Here's how the elves want to use it:
// define simple parsers
type DigitParser = Parse<Just, Digit>;

// combine into more complex parsers
type IntParser = Parse<
  MapResult,
  [Parse<Many1, DigitParser>, Join, StringToNumber]
>;

// parse!
type Parsed = Parse<IntParser, "123.4ff">["data"]; // 123
Implement all of these core parser combinators:

Choice - Tries each parser in order until one succeeds
EOF - Matches the end of input
Just - Matches exactly one character/token
Left - Matches the left parser
Many0 - Matches zero or more of the parser
Many1 - Matches one or more of the parser
MapResult - Maps the parsed data using the provided mapper
Mapper - A mapper is a function that transforms the parsed data
Maybe - Matches zero or one of the parser
MaybeResult - A result type for parsers that may fail
NoneOf - Matches none of the characters/tokens
Pair - Matches two parsers in sequence
Parse - The core parser type
Parser - A parser is a function that attempts to parse an input string
Right - Matches the right parser
SepBy0 - Matches zero or more of the parser separated by the separator parser
Seq - Matches two parsers in sequence

Each parser should return a result type containing:

success: Whether the parse succeeded
data: The parsed data
rest: The remaining unparsed input

Hint
Your solution from Day 23 might be helpful here. Start with the simplest parsers and build up to more complex ones. Make use of anything that has already been implemented for you.

prompt by Travis Wagner

code by invakid404
