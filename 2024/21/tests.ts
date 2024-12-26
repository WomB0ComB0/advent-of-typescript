import type { Expect, Equal } from "type-testing";

type t0_actual = Lint<`
let teddyBear = "standard_model";
`>;
type t0_expected = {
  scope: { declared: ["teddyBear"]; used: [] };
  unused: ["teddyBear"];
};
type t0 = Expect<Equal<t0_actual, t0_expected>>;

type t1_actual = Lint<`
buildToy(teddyBear);
`>;
type t1_expected = {
  scope: { declared: []; used: ["teddyBear"] };
  unused: [];
};
type t1 = Expect<Equal<t1_actual, t1_expected>>;

type t2_actual = Lint<`
let robotDog = "deluxe_model";
assembleToy(robotDog);
`>;
type t2_expected = {
  scope: { declared: ["robotDog"]; used: ["robotDog"] };
  unused: [];
};
type t2 = Expect<Equal<t2_actual, t2_expected>>;

type t3_actual = Lint<`
let robotDog = "standard_model";
  const giftBox = "premium_wrap";
    var ribbon123 = "silk";
  
  \t
  wrapGift(giftBox);
  \r\n
      addRibbon(ribbon123);
`>;
type t3_expected = {
  scope: { declared: ["robotDog", "giftBox", "ribbon123"]; used: ["giftBox", "ribbon123"] };
  unused: ["robotDog"];
};
type t3 = Expect<Equal<t3_actual, t3_expected>>;

type t4_actual = Lint<"\n\t\r \t\r ">;
type t4_expected = {
  scope: { declared: []; used: [] };
  unused: [];
};
type t4 = Expect<Equal<t4_actual, t4_expected>>;