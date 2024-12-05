import { Expect, Equal } from 'type-testing';

type WellBehavedList = {
tom: { address: '1 candy cane lane' };
timmy: { address: '43 chocolate dr' };
trash: { address: '637 starlight way' };
candace: { address: '12 aurora' };
};
type test_wellBehaved_actual = AppendGood<WellBehavedList>;
//   ^? type test_wellBehaved_actual = any
type test_wellBehaved_expected = {
good_tom: { address: '1 candy cane lane' };
good_timmy: { address: '43 chocolate dr' };
good_trash: { address: '637 starlight way' };