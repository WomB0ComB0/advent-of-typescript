import type { Equal, Expect } from 'type-testing';

const bads = ['tommy', 'trash'] as const;
const goods = ['bash', 'tru'] as const;

type test_0_actual = SantasList<typeof bads, typeof goods>;
//   ^? type test_0_actual = any
type test_0_expected = ['tommy', 'trash', 'bash', 'tru'];
type test_0 = Expect<Equal<test_0_actual, test_0_expected>>;

type test_1_actual = SantasList<[], []>;
//   ^? type test_1_actual = any
type test_1_expected = [];
type test_1 = Expect<Equal<test_1_actual, test_1_expected>>;
