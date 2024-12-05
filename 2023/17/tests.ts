import type { Equal, Expect } from 'type-testing';

type test_0_actual = WhoWins<'👊🏻', '🖐🏾'>;
//   ^? type test_0_actual = any
type test_0_expected = 'win';
type test_0 = Expect<Equal<test_0_expected, test_0_actual>>;

type test_1_actual = WhoWins<'👊🏻', '✌🏽'>;
//   ^? type test_1_actual = any
type test_1_expected = 'lose';
type test_1 = Expect<Equal<test_1_expected, test_1_actual>>;

type test_2_actual = WhoWins<'👊🏻', '👊🏻'>;
//   ^? type test_2_actual = any
