# Advent of TypeScript 2024 - Day 15

While It's well known that with Christmas spirit at all-time lows, 🎅Santa has had to resort to using jet fuel to help power his sleigh. But in this economy, gas prices are through the roof! To help keep costs down, the elves came up with a plan to track the distance between each stop on 🎅Santa's route.
The elves don't really understand "miles" or "kilometers". Instead, they just use the dashes they drew on the map to represent a unit of fuel needed to travel between locations. They've written out 🎅Santa's entire route as a string of locations separated by these markers.
For example:
north_pole--candycane_forest----gumdrop_sea-------hawaii
This means:

'candycane_forest' is 2 units from 'north_pole'
'gumdrop_sea' is 4 units from 'candycane_forest'
'hawaii' is 7 units from 'gumdrop_sea'

The elves need help building a type that will take their route string and calculate how much fuel is needed to travel between each destination.
Hint
Think about how you can use TypeScript's type system to count things. Just like how you can count items in a regular array, you can use a tuple's length in the type system to keep track of numbers. The tricky part is figuring out how to count the dashes between each location while maintaining the relationship between locations and their distances.

prompt by Travis Wagner

code by Travis Wagner
