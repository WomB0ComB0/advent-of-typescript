import type { Equal, Expect } from 'type-testing';

type Forest0 = ['🎅🏼', '🎄', '🎄', '🎄'];
type test_0_actual = FindSanta<Forest0>;
//   ^? type test_0_actual = any
type test_0_expected = 0;
type test_0 = Expect<Equal<test_0_expected, test_0_actual>>;

type Forest1 = ['🎄', '🎅🏼', '🎄', '🎄', '🎄', '🎄'];
type test_1_actual = FindSanta<Forest1>;
//   ^? type test_1_actual = any
type test_1_expected = 1;
type test_1 = Expect<Equal<test_1_expected, test_1_actual>>;
