import type { Equal, Expect } from 'type-testing';

type SantasList = {
  naughty_tom: { address: '1 candy cane lane' };
  good_timmy: { address: '43 chocolate dr' };
  naughty_trash: { address: '637 starlight way' };
  naughty_candace: { address: '12 aurora' };
};
type test_wellBehaved_actual = RemoveNaughtyChildren<SantasList>;
//   ^? type test_wellBehaved_actual = any
type test_wellBehaved_expected = {
  good_timmy: { address: '43 chocolate dr' };
};
type test_wellBehaved = Expect<Equal<test_wellBehaved_expected, test_wellBehaved_actual>>;
