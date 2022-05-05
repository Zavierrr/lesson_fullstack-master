// let 是js es6 声明变量的关键字
//  1. 变量名num，代表：值所在的空间 在内存中声明了空间地址
//  2. index.html 运行在浏览器中 
//  js是运行在前端的唯一语言
//  3. 控制台通过变量名找到，全局变量

// num:mumber = "sdsd" 静态语言 c c++ java 需要先确定数据类型
// js是弱类型语言 声明变量时不需要确定数据类型 不太严格 好上手
let num1; 
console.log(typeof num1); //undefined 未定义
// js 变量的类型由值确定
let num2; //声明num2变量 数据类型是什么？不确定
num2 = 33;

// const 声明常量
const name = "Zavier"; //字符串类型
// 命名很重要 例：是否单身
// 1.解决了js 弱类型的问题
let isSingle = true;

let numPrice = 12.3;

let gf = null;// 声明变量，值为空
    gf = "小猫";

let people = {
    // 冒号作用是给对象的属性赋值
    age : 18,
    // 对象是可嵌套的
    name : {
        // first-name中的 - 非法，所以必须用""
         "first-name" : "Zavier",
        // last_name合法，不强制使用""
        last_name : "H"
    },
    sex : 'man'
}

if (typeof Object.beget !== 'function') {
    Object.beget = function (o) {
        let F = function () {};
        F.prototype = o;
        return new F();
    }
}
let another_people = Object.beget(people);

let a;
for (a in another_people) {
    if (typeof another_people[a] !== 'function') {
        console.log(a + ':' + another_people[a]);
    }
}

console.log('aaa' + people['age'])
// console.log('aaa' + people[age])
let b = people.sex;
console.log('bbb' + people[b])
console.log(people.sex)
delete people.sex
console.log(people.sex)