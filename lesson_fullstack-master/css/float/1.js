// 数字超出计算范围
let a = 1234567898765321234567890n;
// 数字太大 超出计算范围
console.log(typeof a);  // bigint

// js小数相加不准确
// js 没有特定数值类型
// 转为进二进制计算时会出现误差
console.log(0.1 + 0.2);

let b = BigInt("11112243333332555555555555777778888");

console.log(a + b);
console.log(1n + 2n);  // 3n
console.log(5n / 2n);  // 2n
console.log(6n / 2n);  // 3n
console.log(Number(5n) + 1);  // 不能混用  类型转换 强制类型转换 6
console.log(5n + BigInt(1)); // 类型转换 6n
console.log(+ new Date());  // 类型转换 隐式类型转换
console.log(true + 1);  // 类型转换  2
console.log("1" + 1);  // 类型转换 拼接 11
console.log(typeof String(true));  // 强制类型转换 string
console.log(+ 1n); // Cannot convert a BigInt value to a number
console.log(+ BigInt(1)); // Cannot convert a BigInt value to a number
