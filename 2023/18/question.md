# Advent of TypeScript 2023 - Day 18

Santa's Remaining Deliveries

Santa needs your help to count the number of presents he has to deliver! He's got all kinds of presents, from video game consoles (🎮), stuffed animals (🧸), toy cars (🏎️), books (📚), and more!

We need a general purpose type that can take a tuple of items as its first arguemnt and an item to search for as the second argument. It should return a count of the item specified.

For example:

Count<['👟', '👟', '💻', '🎸', '🧩', '👟', '🧸'], '👟'>;

should return 3 because there are three 👟.

prompt by Dimitri Mitropoulos of MiTS

## Initial Code
```typescript
type Count = unknown;

```

## Tests
```typescript
import { Expect, Equal } from 'type-testing';


type ToySack = [
'🎸', '🎧', '👟', '👟', '💻', '🪀', '🧩', '🎮',
'🎨', '🕹️', '📱', '🧩', '🧸', '🎧', '👟', '🚲',
'📚', '⌚', '🎨', '👟', '🎸', '🧸', '👟', '🎸',
'📱', '🎧', '🎮', '🎒', '📱', '🧩', '🧩', '🚲',
'🕹️', '🧵', '📱', '🕹️', '🕰️', '🧢', '🕹️', '👟',
'🧸', '📚', '🧁', '🧩', '🎸', '🎮', '🧁', '📚',
'💻', '⌚', '🛹', '🧁', '🧣', '🪁', '🎸', '🧸',
'🧸', '🧸', '🧩', '🪁', '🏎️', '🏎️', '🧁', '📚',
'🧸', '🕶️', '💻', '⌚', '⌚', '🕶️', '🎧', '🎧',
'🎧', '💻', '👟', '🎸', '💻', '🪐', '📚', '🎨',
```