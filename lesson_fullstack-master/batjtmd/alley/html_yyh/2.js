// 语言第四章 函数
// 当函数名大写为构造函数
// js 早期没有class关键字，并不影响它做java的传统面向对象编程
// 函数是一等对象，可以用来构造对象
// js 其实没有类
// 构造类 方法二
function Cat(name) {
    // 给一组对象添加属性
    this.name = name;
    // 不建议这么写
    // this.makeSound = function() {
    //     console.log('喵');
    // }
}

// js 函数对象有prototype 属性
// 共有的方法放在prototype 对象中
Cat.prototype.makeSound = function() {
    console.log('喵');
}

// 私有的无法被实例化对象调用
// Cat.sayHi = function() {
//     console.log('Hi!');
// }

// 同一组对象 共同的类方法、属性模板
// 实例化对象
var catty = new Cat('咖啡');
catty.makeSound();
var cattie = new Cat('益达');
// 不能调用，私有
// cattie.sayHi();

// 判断两个对象是兄弟
console.log(cattie.constructor == catty.constructor);
// 判断对象是某类的实例
console.log(catty instanceof Cat);
// Object 既是对象又是函数

let a = {}; // 对象字面量构造函数
let obj = new Object(); // 对象字面量
console.log(obj instanceof Object);
console.log(typeof Object);