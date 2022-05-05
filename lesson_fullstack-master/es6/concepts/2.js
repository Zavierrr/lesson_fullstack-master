// 箭头函数 
// a为参数 只有一个参数时，可以省略()
// 函数体只有一句，可以省略{}和return
const func = a => a;
// 原始写法
// const func = function (a) {
//     return a;
// }

// 歧义 函数的{} 对象字面量的{}
const sum = (a, b) => ({ val: a + b });
console.log(sum(1, 2)); //