type ValidColors = readonly ["red", "yellow", "green"];
type Color_ = ValidColors[number];

const createStreetLight = <T extends Color_ = Color_>(
  colors: readonly T[],
  defaultColor: T
): T => {
  console.log(colors);
  return defaultColor;
};