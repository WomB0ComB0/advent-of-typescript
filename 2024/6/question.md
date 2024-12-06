# Advent of TypeScript 2024 - Day 6

[Conversation in the #bugs company Slack channel.]
[🎅Santa] How do you hoofed halfwits manage to screw up something a toddler with a crayon could figure out? I asked for the simplest thing I could imagine and you still couldn't do it!  If you had two brain cells to rub together you'd understand that only numbers or strings are valid route identifiers!
[🌩️Donner] Please make a thead in this Slack channel, otherwise it gets too noisy and hard to follow.  Also our Linear thing just made 3 tickets for each of your messages.
[🎅Santa] I am old school, I prefer IRC-style chatter.  I do not value these "thread" things and find them difficult to use.  I'll never do it, myself.
[🌟Vixen, in a thread] This isn’t 1997, Santa.  Nobody cares about your IRC war stories.  This is a company support channel with integrations designed to run the company better.  How are you seriously against that??
[🎅Santa] I'm not against that, I'm just against using threads in chat apps.

Clearly we need to constrain our generic type a bit to only allow specific data types.  🎅Santa will probably also complain about that, but so it goes.

Hint
You might need to _"extend"_ the solution from Day 4.

prompt by Dimitri Mitropoulos on behalf of Michigan TypeScript

code by Dimitri Mitropoulos on behalf of SquiggleConf>

## Initial Code
```typescript
const createRoute =<Route>(author:string,route:Route)=>{console.log(`[createRoute]route created by ${author}at ${Date.now()}`);return route}
```

## Tests
```typescript
import type{Expect,Equal}from 'type-testing';const oneMill = createRoute('🌩️Donner',100_000_000);type t0_actual = typeof oneMill;// =>type t0_actual = 100000000 type t0_expected = 100_000_000;// =>type t0_expected = 100000000 type t0 = Expect<Equal<t0_actual,t0_expected>>;const two = createRoute('🔴Rudolph',2);type t1_actual = typeof two;// =>type t1_actual = 2 type t1_expected = 2;// =>type t1_expected = 2 type t1 = Expect<Equal<t1_actual,t1_expected>>;const three = createRoute('💨Dasher','3');type t2_actual = typeof three;// =>type t2_actual = "3"
```