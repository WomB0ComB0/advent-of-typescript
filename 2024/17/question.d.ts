const compose = (f, g, h) => (a) (
  h(g(f(a)))
);

const upperCase = (x) => x.toUpperCase();
const lowerCase = (x) => x.toLowerCase();
const firstChar = (x) => x[0];
const firstItem = (x) => x[0];
const makeTuple = (x) => [x];
const makeBox = (value) => ({ value });