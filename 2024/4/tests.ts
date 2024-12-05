import type { Expect, Equal } from 'type-testing';

// We can pass numbers like `2009`:

const start = survivalRatio(2009);
type t0_actual = typeof start; // => type t0_actual = number
type t0_expected = number;   // => type t0_expected = number
type t0 = Expect<Equal<t0_actual, t0_expected>>;

const now = survivalRatio(2024);
type t1_actual = typeof now; // => type t1_actual = number
type t1_expected = number; // => type t1_expected = number
type t1 = Expect<Equal<t1_actual, t1_expected>>;
