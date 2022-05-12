/**
 * 使用reduce（减少）
 * 消灭数组（逐项消去）
 */
const arr = [1, 2, 3, 4, 5, 6];
// total代表上一次运行结果
console.log(arr.reduce((total, currentValue) => {
    return total + currentValue;
}, 0));
// 0 为初始值