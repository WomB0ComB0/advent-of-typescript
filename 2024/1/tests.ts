import type { Expect, Equal } from 'type-testing';

/** `Demand` corresponds to the type you supply/modify */
type t0_actual = Demand;    // => type t0_actual = unknown

/** This line shows what the expected result of `Demand` should be */
type t0_expected = number; // =>

/**
* We compare the two results here with `Expect` and `Equal`
*
* These are special TypeScript types that will cause a type error if the two types are not equal.
*
* If every `Expect`/`Equal` line passes, then it means you've completed today's challenge!