// 传统面向对象
// 类是对象的属性和方法模板
// class Dog1 {
//     constructor(type, color) {
//         this.type = type;
//         this.color = color;
//     }
//     makeSound() {
//         console.log('汪汪汪！');
//     }
//     eat() {
//         console.log('来块骨头！');
//     }
// }

// js 原型式面向对象
// 构造函数
function Dog(type, color) {
    // 给一组对象添加属性
    this.type = type;
    this.color = color;

    // 不建议这么写，占内存
    // this.makeSound = function() {
    //     console.log('汪汪汪！');
    // }
}

// 任何构造函数都有prototype 对象
// Dog.prototype 与 xh、xmy时什么关系？
// 是共同的实例之间共享的方法
// Dog.prototype 是对象类型（原型对象）
Dog.prototype.makeSound = function() {
    console.log('汪汪汪！');
}
Dog.prototype.eat = function() {
    console.log('来块骨头！');
}

// 另一种写法
// Dog.prototype = {
//     makeSound: function() {
//         // this指向实例化对象
//         console.log(`${this.type}`, '汪汪汪-----！');
//     },
//     eat: function() {
//         console.log('来块骨头！');
//     }
// }


// 构造函数（负责属性）    原型对象（负责方法，独立于构造函数之外）  实例
// 1. 把构造函数运行一下
// 2. 把 new 的方式运行   this指向xh、smy
const xh = new Dog('中华田园犬', '黄');
const smy = new Dog('萨摩耶', '白');

console.log(xh);
console.log(xh instanceof Dog);
xh.makeSound();
smy.makeSound();
// 私有属性
// 任何一个实例对象都有一个__proto__方法，指向构造函数的prototype
console.log(xh.__proto__, '------');
// xh 先去构造器看有没有相应的方法，再去原型对象（prototype）上查找

// 相同的地方：相同的构造函数
// constructor是原型对象独有的，用来查找原型对象的构造函数
// 实例对象调用时，实际上是：xh.__proto__constructor == smy.__proto__.constructor
console.log(xh.constructor == smy.constructor);

// 三者结果相同
console.log(xh.constructor);
console.log(xh.__proto__.constructor);
console.log(Dog.prototype.constructor);
console.log(Dog.constructor);