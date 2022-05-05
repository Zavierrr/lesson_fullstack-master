/**
 * 面试编程题  写一个函数
 * 传统面向对象 实例
 * dog  Object实例出来  原型链
 * dog.__proto__   ==  b.prototype  b是a的原型对象
 * dog.__proto__.__proto__.__proto__...  最终指向null  b是a 原型链上的对象
 * instanceof 传统语言中是为了判断a 是否为b 的实例
 * js 中 instanceof 运算符用于判断构造函数的prototype 属性是否出现在对象的原型链中的任何位置
 * 如果构造函数的prototype 属性为空，则表示为{}
 * @func     instanceof 实现
 * @param    a 对象  b 对象
 * @returns  Boolean
 */

function Cat() {

}
Cat.prototype.sayHi = function() {

}

function Dog() {

}
Dog.prototype.sayHi = function() {

}

function myInstanceof(a, b) {
    let proto = Object.getPrototypeOf(a);
    // console.log(proto, a.__proto__);
    let prototype = b.prototype;
    while (true) {
        if (!proto) return false;
        if (proto == prototype) return true; // while 退出
        proto = Object.getPrototypeOf(proto); // 原型链往上一级
    }
}
const dog = new Dog();
console.log(myInstanceof(dog, Dog));
console.log(myInstanceof(dog, Object));
console.log(myInstanceof(dog, Cat));