// forEach 是数组的Api
const items = [1, 2, 3, 4, 5];

function forEach(arr, callback) {
    // 完成对每个元素的遍历，并对每个元素执行操作
    for (let i = 0; i < arr.length; i++) {
        // 块级作用域
        const item = arr[i];
        callback(item, i, arr);
    }
}
forEach(items, function (item, index, arr) {
    // 函数作用域
    console.log(item, index, arr);
    // console.log(item + 10);
})
// console.log(items);

const newItems = items.map(function (item) {
    return item + 5
});

console.log(newItems, items);