// const lodash = require('lodash')
const _ = require('lodash') // 工具函数库

console.log(_.flatten([1, 2, [3]]));
console.log(_.flatten([1, 2, [3], [4, [5, 6]]]));


// [1,2,[3],[4,[5,6]]] => [1,2,3,4,5,6]
// 1. 快速搞定
//     - for
//     - Array.isArray 判断是否数组
//     - 是数组，用...展开运算符，concat拼接
// 2. 