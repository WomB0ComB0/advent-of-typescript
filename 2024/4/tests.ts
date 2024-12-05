},
"1986 Q3": {
housingIndex: 115.74266,
minimumWage: 81.69449
},
"1986 Q4": {
housingIndex: 117.02931,
minimumWage: 81.2034
},
"1987 Q1": {
housingIndex: 118.00854,
minimumWage: 80.44374
},
"1987 Q2": {
housingIndex: 118.26679,
minimumWage: 79.6754
},
"1987 Q3": {
housingIndex: 118.38172,
minimumWage: 78.92905
},
"1987 Q4": {
housingIndex: 118.24629,
minimumWage: 78.25353
},
"1988 Q1": {
housingIndex: 119.69701,
minimumWage: 77.64127
},
"1988 Q2": {
housingIndex: 120.40172,
minimumWage: 76.7927
},
"1988 Q3": {
housingIndex: 120.09261,
minimumWage: 75.8579
},
"1988 Q4": {
import type { Expect, Equal } from 'type-testing';
// We can pass numbers like `2009`:
const start = survivalRatio(2009);
type t0_actual = typeof start; // => type t0_actual = number
type t0_expected = number;   // => type t0_expected = number
type t0 = Expect<Equal<t0_actual, t0_expected>>;
const now = survivalRatio(2024);
type t1_actual = typeof now; // => type t1_actual = number
type t1_expected = number; // => type t1_expected = number
type t1 = Expect<Equal<t1_actual, t1_expected>>;