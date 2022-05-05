// 编译阶段，变量提升
// 执行阶段，进行赋值
console.log(a); // undefined  预编译阶段 var让变量会提升，但赋值不会
console.log(b); // error   let不会使变量提升

var a = 1;
let b = 2;

// 相当于：
// var a;
// console.log(a);
// a = 1;