// constructor
function Dog() {

}

// 原型
Dog.prototype.sayHi = function() {

}

const dog = new Dog();
console.log(dog instanceof Dog); // 原型
console.log(dog instanceof Object); // 原型链
console.log(dog.sayHi());
console.log(dog.toString());