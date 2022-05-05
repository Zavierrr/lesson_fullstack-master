// NaN（not a number）
console.log(typeof NaN); // Number  也就是说 NaN含义表示不是数字，但是属于数字类型，自相矛盾
// 判断Number 类型，但要排除 NaN
const isNumber = val => typeof val === 'Number' && val === val;

console.log(2 === 2); // true
console.log(NaN === NaN); // false
// 因此通过 typeof val === 'Number' 筛选数字类型，通过 val === val，排除NaN
console.log(isNumber(NaN));