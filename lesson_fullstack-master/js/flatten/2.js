/**
 * @func 手写flatten 拍平
 * @param {Array} arr 
 * @returns {Array} result
 */
function flatten(arr) {
    var result = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        if (Array.isArray(arr[i])) { // 判断是否数组
            // 递归
            result = result.concat(flatten(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(flatten([1, 2, [3], [4, [5, [6, 7]]]]));