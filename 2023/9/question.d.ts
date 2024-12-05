type Reverse<Word extends string> = Word extends `${infer FirstLetter}${infer Rest}`
  ? `${Reverse<Rest>}${FirstLetter}`
  : Word;
