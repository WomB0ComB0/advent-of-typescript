const survivalRatio = (input) => {
const quarter = typeof input === 'string' ? input : `${input} Q1`;
const data = quarterlyData[quarter];
if (!data) {
throw new Error("Data not found");
}
return data.housingIndex / data.minimumWage;
}

type QuarterlyData = {
[key: string]: {
/** inflation corrected housing price index */
housingIndex: number;

/** inflation corrected North Pole minimum wage */
minimumWage: number;
};
}

const quarterlyData: QuarterlyData = {
"1975 Q1": {
housingIndex: 100,
minimumWage: 100
},
"1975 Q2": {
housingIndex: 100.08193,
minimumWage: 98.79568
},
"1975 Q3": {
housingIndex: 98.21265,
minimumWage: 96.98526
},
"1975 Q4": {
housingIndex: 98.33523,
minimumWage: 95.38534
},
"1976 Q1": {
housingIndex: 98.27736,