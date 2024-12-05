import { Expect, Equal } from 'type-testing';

type test_0_actual = FilterChildrenBy<
//   ^? type test_0_actual = any
'nice' | 'nice' | 'nice',
'naughty'
>;
type test_0_expected = 'nice';
type test_0 = Expect<Equal<test_0_expected, test_0_actual>>;

type test_1_actual = FilterChildrenBy<
//   ^? type test_1_actual = any
'nice' | 'naughty' | 'naughty',
'naughty'