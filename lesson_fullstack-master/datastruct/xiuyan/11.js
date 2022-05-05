// 数组在 leetcode 题目  两数相加
// 数组相关的算法  排序（冒泡 两重for 插入），二分算法（有效提升效率），动态规划

// 1. 基本思路
// 2. 反思
//  两层循环优化成一层循环 空间换时间
const nums = [2, 7, 11, 15];
const target = 9;
let obj = {};
function func(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                return [i, j];
            } else {
                return false;
            }
        }
    }
}
console.log(func(nums));


