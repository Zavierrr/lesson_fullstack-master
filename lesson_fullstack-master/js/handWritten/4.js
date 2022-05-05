// 如何去重
const array = [1, 2, 3, 5, 7, 9, 3, 1];
// 声明一个新的数组，将元素push进去，如果已存在，则不放进去  indexof
// 写法一：
// o(n^2)
const uniqueArray = (arr) => {
    let res = [];
    // o(n)
    for (let i of arr) {
        // 判断  如果不重复则进数组
        // o(n)
        if (res.indexOf(i) == -1) {
            res.push(i);
        }
    }
    return res;
}

// 写法二：
// o(n^2)
const uniqueArray1 = (arr) => {
    let res = [];
    // o(n)
    for (let i = 0; i < arr.length; i++) {
        // 判断  如果不重复则进数组
        // o(n)
        if (res.indexOf(arr[i]) == -1) {
            res.push(arr[i]);
        }
    }
    return res;
}

const uniqueArray3 = (arr) => {
    let res = [];
    // 缺点：以空间换时间
    let map = {};
    // o(n)
    for (let i of arr) {
        // 判断  如果不重复则进数组
        // o(n)
        if (!map.hasOwnProperty(i)) { // 判断自身属性是否有i
            // i属性进入map，并赋予值为1  即key : value => i : 1
            map[i] = '已进入';
            res.push(i);
        }
    }
    console.log(map);

    return res;
}

// console.log(uniqueArray(array));
// console.log(uniqueArray1(array));
console.log(uniqueArray3(array));


// 判断数组类型
// console.log(Object.prototype.toString.call(array)); // [object Array]
// console.log(typeof array); // object
// console.log(Array.isArray(array)); // true