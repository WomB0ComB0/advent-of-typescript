import type { Equal, Expect } from 'type-testing';

type test_0_actual = Rebuild<[2, 1, 3, 3, 1, 1, 2]>;
//   ^? type test_0_actual = any
type test_0_expected = [
  '🛹',
  '🛹',
  '🚲',
  '🛴',
  '🛴',
  '🛴',
  '🏄',
  '🏄',
  '🏄',
  '🛹',
  '🚲',
  '🛴',
  '🛴',
];
type test_0 = Expect<Equal<test_0_expected, test_0_actual>>;
