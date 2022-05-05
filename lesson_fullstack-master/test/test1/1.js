const num = 45;  // 十进制
console.log(parseInt(num.toString(2))); // 转二进制，并转换为数字类型（parseInt）
console.log(Number(num.toString(8))); // 转八进制，并转换为数字类型（Number）强制类型转换
console.log(+ num.toString(8)); // 转十六进制，并转换为数字类型（Number）+隐式类型转换

// 报错
// 结果是2d，转数字会报错，NaN
console.log(+ num.toString(16));