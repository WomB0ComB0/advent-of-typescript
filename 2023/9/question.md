# Advent of TypeScript 2023 - Day 9

Is Santa Dyslexic?

[it's early Saturday morning and the team has been working overtime. Santa storms into the factory floor shouting..]

[Santa] Don't you elves take any pride in your work?!?! Others would love to have your job for much less pay! I asked for a simple type that will reverse strings!! How hard is that?!? What do we even pay you for??

[unfortunately, Santa is conveniently forgetting that the Reverse type was cut from the sprint (which... of course... he agreed to)]

[floor manager] Ok. We never got acceptance criteria for that ticket.
[Santa] How difficult is it to understand what Reverse does!? 'rehsaD' should be transformed into 'Dasher', 'recnaD' should be transformed into 'Dancer', 'recnarP' should be transformed into 'Prancer'.. DO I NEED TO KEEP GOING?
[floor manager] Well you might be surprised. For example, what should happen to multi-codepoint unicode characters?
[Santa] What are you on about with all that accessibility stuff again!
[floor manager] Accessibility is important, sir.
[Santa] Look, this is just an MVP. We can add accessibility later. Just get me my Reverse type! I'm having a hard time reading this stuff otherwise!

prompt by Dimitri Mitropoulos of MiTS

## Initial Code
```typescript
type Reverse = unknown;
```

## Tests
```typescript
import { Expect, Equal } from 'type-testing';

type test_0_actual = Reverse<'rehsaD'>;
//   ^? type test_0_actual = any
type test_0_expected = 'Dasher';
type test_0 = Expect<Equal<test_0_expected, test_0_actual>>;

type test_1_actual = Reverse<'recnaD'>;
//   ^? type test_1_actual = any
type test_1_expected = 'Dancer';
type test_1 = Expect<Equal<test_1_expected, test_1_actual>>;

type test_2_actual = Reverse<'recnarP'>;
//   ^? type test_2_actual = any
```