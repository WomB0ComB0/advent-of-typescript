import { Expect, Equal } from "type-testing";

type test_move1_actual = Connect4<NewGame, 0>;
//   ^? type test_move1_actual = any
type test_move1_expected = {
board: [
["  ", "  ", "  ", "  ", "  ", "  ", "  "],
["  ", "  ", "  ", "  ", "  ", "  ", "  "],
["  ", "  ", "  ", "  ", "  ", "  ", "  "],
["  ", "  ", "  ", "  ", "  ", "  ", "  "],
["  ", "  ", "  ", "  ", "  ", "  ", "  "],
["🟡", "  ", "  ", "  ", "  ", "  ", "  "],
];
state: "🔴";