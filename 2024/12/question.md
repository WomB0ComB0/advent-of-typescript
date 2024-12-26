# Advent of TypeScript 2024 - Day 12

[Things are staring to heat up in the North Pole.  The reindeer have been blackmailing Mrs. Claus in order to get fair pay, threatening to expose her affair with 🪩Jamie Glitterglum.]
[🎅Santa] GET ME THOSE NAMES!!!!!!!!!!
[🎩Bernard] I'm workin' on it, I'm workin' on it!
[🎅Santa] TODAY!  I NEED THEM TODAY!!  ACTUALLY I NEED THEM LAST MONTH!!!
[🎅Santa throws a giant box of delicate glass Christmas tree ornaments against the factory wall, sending shards of glass flying in every direction]
[🎩Bernard] Ah, there's the classic 🎅Santa we all know and love.  Smashing priceless ornaments while screaming unintelligibly.  Truly, the Christmas spirit personified.
[🎅Santa] TODAY!  I NEED THEM TODAY!!  ACTUALLY I NEED THEM LAST MONTH!!!
[🎩Bernard] You want every name?  Fine.  I'll even get you the ones with seven middle initials and the kids named after TikTok trends.

🎩Bernard has a very long list of names from the Social Security Administration, but we need to format the data into objects so 🎅Santa can ingest it into his existing system.
Help 🎩Bernard before 🎅Santa continues his violent tirade.  He's not about to spend a bunch of time looking at each child so instead he's just deciding whether a child is naughty or nice based on the number of characters in their name!
A HUGE hint
Part of the fun/trick of this challenge is that you can't solve it normally by iterating because you'll get:

Type instantiation is excessively deep and possibly infinite.ts(2589)
Type produces a tuple type that is too large to represent.ts(2799)

For example, many people will probably first try:
export type Solution<
  Row extends [string, string, string][],
  Accumulator extends { name: string, count: number}[] = []
> =
  Row extends [
    [infer Name extends string, string, infer Count],
    ...infer Rest extends Row,
  ]
  ? Solution<
      Rest,
      [
        ...Accumulator,
        {
          name: Name,
          count: Count extends `${infer CountNum extends number}` ? CountNum : never
        }
      ]
    >
  : Accumulator;
or the non tail-call recursive version:
export type Solution<
  Row extends [string, string, string][],
> =
  Row extends [
    [infer Name extends string, string, infer Count],
    ...infer Rest extends Row,
  ]
  ? [
      {
        name: Name,
        count: Count extends `${infer CountNum extends number}` ? CountNum : never
      },
      ...Solution<Rest>
    ]
  : [];
but that won't work at these scales.  You need to find another way to iterate the array that doesn't involve recursion.

prompt by Dimitri Mitropoulos on behalf of Michigan TypeScript

code by Dimitri Mitropoulos on behalf of SquiggleConf>
