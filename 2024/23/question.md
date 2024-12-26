# Advent of TypeScript 2024 - Day 23

Upgrade the Assembly Line
The North Pole's toy assembly line is getting a major upgrade! To streamline production, the elves need to build a type-safe conveyor belt system that can standardize their operations and make them reusable. The system should introduce an Apply type that can be used to apply operations to values.
The system should support the following operations:

Push: Add an item to a tuple
Extends: Check if a type extends another type
Filter: Filter items in a tuple based on any criteria
ApplyAll: Apply an operation to all items in a tuple
Cap: Capitalize the first letter of a string

Example usage of the conveyor belt system:
type Station1 = Apply<Cap, "robot">; // "Robot"
type Station2 = Apply<Apply<Push, Station1>, ["Tablet", "teddy bear"]>; // ["Tablet", "teddy bear", "Robot"]
type Station3 = Apply<
  Apply<Filter, Apply<Extends, Apply<Cap, string>>>,
  Station2
>; // ["Tablet", "Robot"]
Hint
Generic types like `Array` let you abstract over the type of the element (`T`) in the container (`Array`). But what if you need to abstract over the type of the container itself?

prompt by Travis Wagner

code by Dimitri Mitropoulos on behalf of SquiggleConf
