let a = 1;
let b = 2;

// 方法一：
// let temp = a;  // 内存相关
// a = b;
// b = temp;

// 方法二：
// es6 解构语法
[b, a] = [a, b];

// 方法三：
// a = a + b;
// b = a - b;
// a = a - b; // a: (a + b)   b: a

// 方法四：
// a = [b, b = a][0]; // 数组内，a赋值给b，数组外，将数组下标为0的值（b）赋给a

// 方法五：
// 异或运算符
// a = a ^ b;
// b = a ^ b;
// a = a ^ b;

console.log(a, b);