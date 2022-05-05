// 正则表达式？ 定义一个规则 字符串
// str.match() // 返回通过一个正则表达式匹配到的字符串结果

var str = 'aa123abcde45x6wxy';
// 匹配内容
// + 贪婪匹配:
// 规定其前导字符必须在目标对象中连续出现一次或多次
console.log(/[a-z]+/.test(str)); // true
// g 不停的匹配
console.log(str.match(/[a-z]+/g));
console.log(str.match(/[a-z]/g)); // 没有 + 号，所以只会一个一个返回
console.log(str.match(/[a-z]/));
console.log(str.match(/[a-z]+$/)); // 只看结尾  返回1个  匹配最后一个元素是否为字母，是，则返回以该字母结尾的最后一个字符串（因为有+号，所以是字符串）
console.log(str.match(/^[a-z]+/)); // 只看开头  返回1个  匹配第一个元素是否为字母，是，则返回以该字母开头的第一个字符串（因为有+号，所以是字符串）

let newstr = str.replace(/([0-9]+)([a-z]+)/g, function () {
    // console.log(arguments);  
    // console.log(RegExp.$1);  
});
// console.log(newstr);