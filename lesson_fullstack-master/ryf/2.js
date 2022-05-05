// 面向对象OOP的首要任务是封装，封装属性与方法，成为实例们的模板
// 解决类与实例的关系
function Cat(name) {
    this.name = name;
}
let cat1 = new Cat('大猫');
let cat2 = new Cat('二猫');

console.log(cat1.constructor); // 找到构造函数
console.log(cat1.constructor == cat2.constructor); // 判断兄弟
console.log(cat1.__proto__ == cat2.__proto__); // 判断兄弟
console.log(cat1.__proto__.constructor == cat2.__proto__.constructor); // 判断兄弟
console.log(cat1.__proto__); // Cat构造函数里的原型对象，或者实例们的原型对象 
console.log(cat1.__proto__.constructor); // 原型对象的构造函数 Cat
console.log(cat1 instanceof Cat); // 判断父子
console.log(Cat.prototype.isPrototypeOf(cat1)); // 判断父子