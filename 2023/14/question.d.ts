type DecipherNaughtyList<Words> = Words extends `${infer Start}/${infer Rest}`
  ? Start | DecipherNaughtyList<Rest>
  : Words;
