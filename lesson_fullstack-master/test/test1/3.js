// == 类型转换（简单数据类型）
// === 完全的比较，不进行数据类型转换
console.log(0 == 0); //true
console.log(-0 == +0);  // true
console.log(-0 === +0); //true
console.log(1 == '1'); //true
console.log(1 === '1'); // false string转为数字1 （toNumber）
console.log(1 == true);  // true bool值转为数字1 （toNumber）

// 3!=0, 即 != false 所以为true
if (3) {
    console.log('-----');
}
console.log(3 == true);  // false
console.log(null == undefined) // true 两边一起转换，双向奔赴
console.log(null === undefined) // false
console.log({} == {}) // false 简单数据类型才能转换，并且对象是引用类型（地址），地址肯定不同