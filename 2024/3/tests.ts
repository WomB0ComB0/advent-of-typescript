const data = annualData[input];
if (!data) {
throw new Error("Data not found");
}
return data.housingIndex / data.minimumWage;
}
type AnnualData = {
[key: string]: {
/** inflation corrected housing price index */
housingIndex: number;
/** inflation corrected North Pole minimum wage */
minimumWage: number;
};
}
const annualData: AnnualData = {
2009: {
housingIndex: 159.50891,
minimumWage: 92.85234
},
2010: {
housingIndex: 143.02079,
minimumWage: 100.50286
},
2011: {
housingIndex: 134.38007,
minimumWage: 98.68833
},
2012: {
housingIndex: 128.14281,
minimumWage: 96.31795
},
2013: {
housingIndex: 129.07457,
minimumWage: 94.94066
export const reportForSanta = {
2009: survivalRatio(2009),
2010: survivalRatio(2010),
2011: survivalRatio(2011),
2012: survivalRatio(2012),
2013: survivalRatio(2013),
2014: survivalRatio(2014),
2015: survivalRatio(2015),
2016: survivalRatio(2016),
2017: survivalRatio(2017),
2018: survivalRatio(2018),
2019: survivalRatio(2019),
2020: survivalRatio(2020),