# Advent of TypeScript 2024 - Day 3

[🎅Santa and 🎩Bernard (the head elf) arguing about the fairness of the reindeer demanding a raise]
[🎅Santa] ABSO-FRICKIN-LOUTLEY NOT!!
[🎩Bernard] Look. They literally are starving out there. You haven't raised the minimum wage at the North Pole since 2009 and they're beginning to realize that if you take inflation into account they're making half of what they did then.  Then if you consider how much housing has gone up over the same time it all adds up to a..
[🎅Santa] I don't want to hear another word of this! NOT ONE MORE WORD!  If I could, I'd send some of them to prison for their piss poor job performance!!
[🎩Bernard] It's not gonna be simple to keep this going.
[🎅Santa] I don’t have time to crunch numbers, Bernard! I’m trying to figure out if eggnog futures are still a thing.
[🎩Bernard] Alright, you know what.  Because we go way back, you and me, I'll do you a favor and make you a program that will calculate their cost of living for a given year since 2009.
[🎅Santa] GOOD! Because this operation is hanging by a thread! The elves are threatening to unionize, the reindeer are planning a hunger strike, and Mrs. Claus wants a Peloton.

The function 🎩Bernard created works for numbers, but it also accepts other data types like strings, booleans, arrays, and objects.  That's not quite what we want!  TypeScript can help us here.

Hint
How can we change the signature to `survivalRatio` to make TypeScript give us type errors on the invocations that pass things other than numbers?

prompt by Dimitri Mitropoulos on behalf of Michigan TypeScript

code by Dimitri Mitropoulos on behalf of SquiggleConf>

## Initial Code
```typescript
const survivalRatio = (input) => {
const data = annualData[input];
if (!data) {
throw new Error("Data not found");
}
return data.housingIndex / data.minimumWage;
}

type AnnualData = {
[key: string]: {
/** inflation corrected housing price index */
housingIndex: number;

/** inflation corrected North Pole minimum wage */
minimumWage: number;
};
}

const annualData: AnnualData = {
2009: {
housingIndex: 159.50891,
minimumWage: 92.85234
},
2010: {
housingIndex: 143.02079,
minimumWage: 100.50286
},
2011: {
housingIndex: 134.38007,
minimumWage: 98.68833
},
2012: {
housingIndex: 128.14281,
minimumWage: 96.31795
},
2013: {
housingIndex: 129.07457,
minimumWage: 94.94066
```

## Tests
```typescript

export const reportForSanta = {
2009: survivalRatio(2009),
2010: survivalRatio(2010),
2011: survivalRatio(2011),
2012: survivalRatio(2012),
2013: survivalRatio(2013),
2014: survivalRatio(2014),
2015: survivalRatio(2015),
2016: survivalRatio(2016),
2017: survivalRatio(2017),
2018: survivalRatio(2018),
2019: survivalRatio(2019),
2020: survivalRatio(2020),
```