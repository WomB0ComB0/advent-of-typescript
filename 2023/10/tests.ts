import type { Equal, Expect } from 'type-testing';

type test_0_actual = StreetSuffixTester<'Candy Cane Way', 'Way'>;
//   ^? type test_0_actual = StreetSuffixTester<"Ca…
type test_0_expected = true;
type test_0 = Expect<Equal<test_0_expected, test_0_actual>>;

type test_1_actual = StreetSuffixTester<'Chocalate Drive', 'Drive'>;
//   ^? type test_1_actual = StreetSuffixTester<"Ch…
type test_1_expected = true;
type test_1 = Expect<Equal<test_1_expected, test_1_actual>>;

type test_2_actual = StreetSuffixTester<'Sugar Lane', 'Drive'>;
//   ^? type test_2_actual = StreetSuffixTester<"Su…
