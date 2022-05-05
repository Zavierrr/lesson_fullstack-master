const arr = [1, 2, 3, 4, 5];
let obj = {
    name: 'Zavier',
    sex: '男',
    hometown: '南昌',
    hobbies: ['打球', '看书']
}

// 判断数组类型
console.log(typeof arr);
console.log(Object.prototype.toString.call(arr));
console.log(Array.isArray(arr));

// 计数循环 
// 有点：快
// 缺点：机器思维的代码 面向CPU编程
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// for in 用在数组效率低
// for of用于数组 新的es6 方案
// 优点：可读性高，面向人类编程
// 缺点：没有下标
for (let item of arr) {
    console.log(item);  
}

// callback 回调函数
// 每次遍历，调用一下
// 两个参数分别代表（数组里的每一项，下标）
arr.forEach(function(item, index) {
    console.log(item, index);
});

// for in 一般用于对象遍历
// for (let key in obj) {
//     console.log(key);
// }
