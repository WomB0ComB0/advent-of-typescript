import { Equal, Expect } from 'type-testing';

type MixedBehaviorList = {
john: { behavior: 'good' };
jimmy: { behavior: 'bad' };
sara: { behavior: 'good' };
suzy: { behavior: 'good' };
chris: { behavior: 'good' };
penny: { behavior: 'bad' };
};
type test_MixedBehaviorTest_actual = PresentDeliveryList<MixedBehaviorList>;
//   ^? type test_MixedBehaviorTest_actual = any
type test_MixedBehaviorTest_expected = {
john: Address;