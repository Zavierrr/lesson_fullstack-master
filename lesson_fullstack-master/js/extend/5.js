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
// 拷贝继承！！！
// 核心：把父类实例可枚举的属性和方法，赋给Cat.prototype
function Cat(name) {
    var animal = new Animal();
    for (let i in animal) {
        Cat.prototype[i] = animal[i];
    }
    Cat.prototype.name = name || 'Tom';
}

var cat = new Cat();
console.log(cat.name);	//Tom
cat.sleep();	//Tom正在睡觉！
console.log(cat instanceof Animal); 	// false
console.log(cat instanceof Cat);	 // true