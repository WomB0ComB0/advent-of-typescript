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