type PerfReview<T> = T extends AsyncGenerator<infer Yield, any, any> 
  ? Yield 
  : never;