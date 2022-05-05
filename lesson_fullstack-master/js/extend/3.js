// 构造函数
function Animal(name) {
    this.name = name || 'Animal';
    this.sleep = function () {
        console.log(this.name + '正在睡觉！');
    };
}
// 原型上面的方法：
Animal.prototype.eat = function (food) {
    console.log(this.name + '正在吃:' + food);
}

//-------------------------------------------------------------------------
// 原型链继承！！！
// 核心：将父类的实例作为子类的原型
function Dog() {

}
Dog.prototype = new Animal();  // 将Animal的实例挂载到了Dog的原型链上
// 或：
// Dog.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat;    // 将Cat.prototype 的构造函数指回Cat，否则会指向Animal
Dog.prototype.name = 'dog';     // 覆盖了Animal

var dog = new Dog();
console.log(dog.name);		// dog
dog.eat('bone');		// dog正在吃:bone
dog.sleep();		// dog正在睡觉！
console.log(dog instanceof Animal);		// true
console.log(dog instanceof Dog);		// true
