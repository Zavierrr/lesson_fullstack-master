const o = require('./2.js');
console.log(o);
let s = Symbol('name');
// json 不允许同名的字符串式的key
// 需要 如何向对象添加绝对不重复的key -> 引入Symbol
let newObj = {
    ...o,
    // name:'hhh'  // 覆盖了o中的name
    [s]: 'hhh'   // 不会覆盖o中的name
}
console.log(newObj);

// 独一无二
let s1 = Symbol();
console.log(typeof s1);  //symbol
let s2 = Symbol();
console.log(typeof s2);  //symbol
console.log(s1 == s2);  //false

// Symbol 函数可以接收一个字符串作为参数, 表示对 Symbol 实例的描述
// Symbol 函数的参数只是表示对当前 Symbol 值的描述，即使相同，返回值也不同（即s3 != s4）
let s3 = Symbol('foo');
let s4 = Symbol('foo');
console.log(s3, s4);
console.log(s3 == s4) //false
