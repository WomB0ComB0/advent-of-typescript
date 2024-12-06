import type { Equal, Expect } from 'type-testing';
const oneMill = createRoute('🌩️Donner', 100_000_000);
type t0_actual = typeof oneMill; // =>type t0_actual = 100000000 type t0_expected = 100_000_000;// =>type t0_expected = 100000000 type t0 = Expect<Equal<t0_actual,t0_expected>>;const two = createRoute('🔴Rudolph',2);type t1_actual = typeof two;// =>type t1_actual = 2 type t1_expected = 2;// =>type t1_expected = 2 type t1 = Expect<Equal<t1_actual,t1_expected>>;const three = createRoute('💨Dasher','3');type t2_actual = typeof three;// =>type t2_actual = "3"
