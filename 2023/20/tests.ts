import type { Equal, Expect } from 'type-testing';

type test_0_actual = ToAsciiArt<'   * : * Merry * : *   \n  Christmas  '>;
//   ^? type test_0_actual = any
type test_0_expected = [
  '░░░░░#░░░█▄░▄█ █▀▀ █▀█ █▀█ █ █ ░░░#░░░░░',
  '░░░#░░░#░█ ▀ █ █▀▀ ██▀ ██▀ ▀█▀ ░#░░░#░░░',
  '░░░░░#░░░▀ ░░▀ ▀▀▀ ▀ ▀ ▀ ▀ ░▀ ░░░░#░░░░░',
  '░░█▀▀ █ █ █▀█ █ █▀▀ ▀█▀ █▄░▄█ █▀█ █▀▀ ░░',
  '░░█ ░░█▀█ ██▀ █ ▀▀█ ░█ ░█ ▀ █ █▀█ ▀▀█ ░░',
  '░░▀▀▀ ▀ ▀ ▀ ▀ ▀ ▀▀▀ ░▀ ░▀ ░░▀ ▀ ▀ ▀▀▀ ░░',
];
type test_0 = Expect<Equal<test_0_actual, test_0_expected>>;
