declare function DynamicParamsCurrying(...args: any): 
<F extends any[]>(...args: F) => F[0] extends string ? never : any