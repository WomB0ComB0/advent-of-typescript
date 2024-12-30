type Action = ObjToDiscUnion<{
    Cap: {};
    Push: { data: unknown };
    Extends: { val: unknown };
    Filter: { extends: unknown };
    ApplyAll: { action: Action };
}>;

/** Apply */
type Apply<
    A extends Exclude<Action["type"], "Cap"> | Action,
    T,
> = // handle turning types into actions
  A extends Push 
    ? { type: Push; data: T }
    : A extends Extends 
    ? { type: Extends; val: T }
  : [A, T] extends [ApplyAll, Action] ? { type: ApplyAll; action: T }
  : [A, T] extends [Filter, { type: Extends; val: infer val }]
    ? { type: Filter; extends: val }
  // handle applying the actions
  : [A, T] extends [{ type: "Cap" }, infer str extends string] 
    ? Capitalize<str>
  : [A, T] extends [ { type: Push; data: infer data }, infer arr extends unknown[]]
    ? [...arr, data]
  : A extends { type: Extends; val: infer val }
    ? T extends val ? true : false
  : [A, T] extends [{ type: Filter; extends: infer ext }, infer arr extends unknown[]]
    ? $Filter<arr, ext>
  : [A, T] extends [{ type: ApplyAll; action: infer A extends Action }, infer arr extends unknown[]]
    ? {
        [i in keyof arr]: Apply<A, arr[i]>;
      }
  : never;

/** Push an element to a tuple */
type Push = "Push";

/** Filter a tuple */
type Filter = "Filter";
type $Filter<Arr extends unknown[], E, res extends unknown[] = []> = Arr extends [
    infer next,
    ...infer rest,
]
    ? $Filter<rest, E, [...res, ...(next extends E ? [next] : [])]>
    : res;

/** Determine if the given type extends another */
type Extends = "Extends";

/** Apply an operation to all inputs */
type ApplyAll = "ApplyAll";

/** Capitalize a string */
type Cap = Extract<Action, { type: "Cap" }>;

type ObjToDiscUnion<
    T,
    Disc extends PropertyKey = "type",
    K extends keyof T = keyof T,
> = K extends unknown ? Prettify<Record<Disc, K> & T[K]> : never;

type Prettify<T> = { [K in keyof T]: T[K] } & {};