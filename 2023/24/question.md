# Advent of TypeScript 2023 - Day 24

Santa is stuck!

Santa is craving cookies! But Alas, he's stuck in a dense North Polar forest.

Implement Move so Santa ('🎅') can find his way to the end of the maze.

As a reward, if Santa escapes the maze, fill it with DELICIOUS_COOKIES ('🍪').

Santa can only move through alleys ('  ') and not through the trees ('🎄').

Solving the maze

This challenge is going to be a culmination of all the days that came before.

Thank You!

We just want to say thank you for joining us for the first Advent of TypeScript™! We hope to do many more years in the future! Don't hesitate to leave feedback and tell us what you thought of it!

prompt by Dimitri Mitropoulos of MiTS

## Initial Code
```typescript
type Alley = "  ";
type MazeItem = "🎄" | "🎅" | Alley;
type DELICIOUS_COOKIES = "🍪";
type MazeMatrix = MazeItem[][];
type Directions = "up" | "down" | "left" | "right";
type Move = unknown;
```

## Tests
```typescript
import { Expect, Equal } from "type-testing";

type Maze0 = [
["🎄", "🎄", "🎄", "🎄", "🎄", "🎄", "🎄", "🎄", "🎄", "🎄"],
["🎄", "🎄", "🎄", "🎄", "🎄", "🎄", "🎅", "🎄", "🎄", "🎄"],
["🎄", "🎄", "🎄", "🎄", "  ", "🎄", "  ", "  ", "  ", "🎄"],
["🎄", "🎄", "🎄", "🎄", "  ", "🎄", "  ", "🎄", "  ", "🎄"],
["🎄", "  ", "  ", "  ", "  ", "🎄", "  ", "🎄", "  ", "🎄"],
["  ", "  ", "🎄", "🎄", "  ", "  ", "  ", "🎄", "🎄", "🎄"],
["🎄", "  ", "🎄", "🎄", "  ", "🎄", "  ", "🎄", "🎄", "🎄"],
["🎄", "  ", "🎄", "🎄", "  ", "🎄", "  ", "🎄", "🎄", "🎄"],
["🎄", "  ", "  ", "  ", "  ", "🎄", "  ", "🎄", "🎄", "🎄"],
["🎄", "🎄", "🎄", "🎄", "🎄", "🎄", "🎄", "🎄", "🎄", "🎄"],
];
```