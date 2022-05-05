var str = 'hello';
var str1 = new String('hello'); // 对象 字符串实例
console.log(str, str1); // hello, [String: 'hello']

console.log(str instanceof String); // false  str 是字符串类型，String 类是对象类型
console.log(str1 instanceof String); // true