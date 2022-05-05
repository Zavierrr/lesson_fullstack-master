// 类型转换（显式和隐式）
// 3种

// 一：转成字符串(+ 号)
// 有字符串，先拼接，没有字符串就四则运算
console.log(1 + '1'); // 11
console.log(true + '1'); // true1

// 二：转成数字(- 号)
console.log('2' - '1'); // 1
console.log(true - 1); // 0
console.log(+ true); // 1 隐式类型转换
console.log(true); // true
console.log(typeof true); // boolean


// 三：转成布尔值
if (2) {// 2 => true
    console.log('true');
}

console.log(4 + [1, 2, 3]); // 41,2,3    数组toString 方法  
console.log([1, 2, 3].toString()); // 1,2,3
console.log(typeof String(1)); // string   强制类型转换
console.log(typeof new String(1)); // object   new方法 创建对象

console.log('a' + + 'b'); // aNaN   先（ + 'b' => NaN），再（'a' + NaN => aNaN） 

// 乘法不具备加法的 优先级判断，只会进行数字运算
console.log(4 * '3'); // 12
console.log(4 * []); // 0  数组没有值会转化成0
console.log(4 * [1, 2]); // NaN  数组有值无法转化为数字





