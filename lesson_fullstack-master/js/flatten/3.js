// concat 相当于把每一项最外层的数组的[]这层皮剥了，然后拼接
// 一：
// [ 1, 2, [ 3 ], [ 4, 5, [ 6, 7 ] ] ] ----
// 二：
// [ 1, 2, 3, 4, 5, [ 6, 7 ] ] ----
// 三：
// [ 1, 2, 3, 4, 5, 6, 7] ----
// 输出：
// [1, 2, 3, 4, 5, 6, 7]

function flatten(arr) {
    // some()：判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回true。
    while (arr.some(item => Array.isArray(item))) {
        // console.log(...arr);
        arr = [].concat(...arr);
        console.log(arr, '----');
    }
    return arr
}

console.log(flatten([1, 2, [[3], [4, 5, [6, 7]]]]));


// let arr = [[1], 2, [3, [4, 5]]];
// console.log(arr.some(item => Array.isArray(item)))  // 有一项是数组
// console.log(arr.every(item => Array.isArray(item))) // 每一项都是数组