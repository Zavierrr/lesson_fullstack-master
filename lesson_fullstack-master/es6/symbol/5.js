/**
 * @func 数组去重
 * @author Zavier
 * @date 2022-5-7
 */
const arr = [12, 5, 8, 8, 130, 44, 130, 'a', 'b', 'a'];
var newarr = {};
arr.forEach((key, index) => {
    newarr[key] = index;
})
console.log(Object.keys(newarr));