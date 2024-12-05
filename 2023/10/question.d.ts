type StreetSuffixTester<
  TStreet extends string,
  TSuffix extends string,
> = TStreet extends `${string}${TSuffix}` ? true : false;
