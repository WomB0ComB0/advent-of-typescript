import type { Equal, Expect } from 'type-testing';

type test_SantaToTrash_actual = GiftWrapper<'Car', 'Santa', 'Trash'>;
//   ^? type test_SantaToTrash_actual = any
type test_SantaToTrash_expected = { present: 'Car', from: 'Santa', to: 'Trash' };
type test_SantaToTrash = Expect<Equal<
test_SantaToTrash_actual,
test_SantaToTrash_expected
>>;

type test_TrashToPrime_actual = GiftWrapper<'vscode', 'Trash', 'Prime'>;
//   ^? type test_TrashToPrime_actual = any
type test_TrashToPrime_expected = { present: 'vscode', from: 'Trash', to: 'Prime' };
type test_TrashToPrime = Expect<Equal<