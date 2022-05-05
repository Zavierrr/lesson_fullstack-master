function Cat(name) {
    this.name = name;
    // 共同属性和方法，浪费内存
    // 需要将这些共享的属性与方法存放在一个新的、独立于构造之外的空间
    // this.type = '猫科'; // 不会改变的属性
    // this.eat = function() {
    //     console.log('吃老鼠');
    // }
}
// 省内存
// 所有实例共享prototype 对象上的属性与方法
// 实例如何共享prototype 上的属性与方法？
Cat.prototype.eat = function() {
    console.log('吃老鼠');
}
Cat.prototype.type = '猫科';

let cat1 = new Cat('大猫');
let cat2 = new Cat('二猫');
console.log(cat1.hasOwnProperty('name'), cat2.hasOwnProperty('type')); // true， false 
// 前者是构造函数用this指针给的，后者是原型对象prototype的，因此前者是有自己的name属性，而后者没有自己的type属性
console.log(cat2.type);
console.log(cat2.__proto__.type);
// 现在ownProperties 里查找，没有再通过__proto__去原型对象prototype 上查找 即cat2.__proto__.type
console.log(cat2.toString());
// toString属于Object的，原型链顶端为null  cat2.__proto__.__proto__.__proto__
// 所以相当于cat2.__proto__.__proto__.toString()