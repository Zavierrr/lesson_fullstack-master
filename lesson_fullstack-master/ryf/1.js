let a = 1.23;
// 为什么a 是 number 简单数据类型，却可以作为对象调用.toFixed这个API？
// js 是基于对象（object-base）的语言，即让编程风格尽量对象化
console.log(a.toFixed(1)); // 保留固定位数的小数位

var n1 = new Number(2);
console.log(n1, typeof n1, n1.valueOf()); // [Number: 2] object 2
console.log(typeof a); // js不适合精确数字运算
console.log(0.1 + 0.2); // Javascript中使用基于 IEEE 754 标准的【浮点数】运算，会产生舍入误差
console.log(typeof null); // bug 32位 前三位与Object一样 000