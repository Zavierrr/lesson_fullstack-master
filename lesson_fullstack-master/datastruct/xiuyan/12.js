/**
 * 
 * @param {number[]} nums 
 * @param {number} target 
 */
const twoSum = function (nums, target) {
    // 用空间换时间，减少一些循环
    const diffs = {};
    // 缓存数组的长度
    const len = nums.length;
    // 遍历数组
    for (let i = 0; i < len; i++) {
        // 判断diffs对象内是否存在 target - nums[i] 属性
        if (diffs[target - nums[i]] !== undefined)
            return [diffs[target - nums[i]], i];
        else {
            // nums[i]作为key，i作为value， key: value  =>  nums[i]: i
            diffs[nums[i]] = i;
        }
        console.log(diffs);
    }
}
// 关键语句 diffs['key'] = value 赋值语句
console.log(twoSum([2, 8, 3, 6], 9));
