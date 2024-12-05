import { Equal, Expect } from 'type-testing';

type test_move1_actual = TicTacToe<NewGame, 'top-center'>;
//   ^? type test_move1_actual = any
type test_move1_expected = {
board: [
[ '  ', '❌', '  ' ],
[ '  ', '  ', '  ' ],
[ '  ', '  ', '  ' ]
];
state: '⭕';
};
type test_move1 = Expect<Equal<test_move1_actual, test_move1_expected>>;
