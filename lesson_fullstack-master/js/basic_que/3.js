// 包装 String('1')
let a = '1';
let b = 1;
let c = new String(a);
console.log(a.toString()); // 1  隐藏步骤String('1')，临时将字符串包装成对象（类型转换），结束之后变回字符串类型
console.log(typeof a); // string
console.log(typeof b); // number
console.log(typeof c); // object 包装成对象
console.log(a, b, c); //字符串1，数字1，字符串对象1

console.log(typeof new String(a)); // object new 一个String对象
console.log(typeof new Number(b)); // object new 一个Number对象
console.log(typeof String(1)); // string 强制类型转换



// js 长久以来的bug，早期使用的是32位操作系统
// 为了性能考虑（typeof 校验前三位），使用低位存储变量的类型（前三位）
// null 32位全为0，对象的前三位也为0
// console.log(typeof null); // object
// console.log(null.toString()); // 报错




