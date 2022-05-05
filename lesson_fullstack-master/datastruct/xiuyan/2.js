// 访问数组元素
const arr = [1, 2, 3, 4, 5];

// 1：
// 更适应机器运算，运算效率高
const len = arr.length; // 防止每次遍历访问长度
for (let i = 0; i < len; i++) {
    console.log(arr[i], i);
}

// 2：
// 可读性好，业务代码 es6
// let i = 0;
// for (let item of arr) {
//     console.log(item, i);
//     i++; // 取下标
// }

// 3：
// arr.forEach((item, index) => {
//     console.log(item, index);
// })

// 4：
// 返回新数组
arr.map((item, index) => {
    console.log(item, index);
    return item + 1;
})