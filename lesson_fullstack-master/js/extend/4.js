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
// 实例继承！！！
// 核心：为父类实例添加新特性，作为子类实例返回
function Cat(name) {
    var instance = new Animal();
    instance.name = name || 'Tom';
    return instance;
}

var cat = new Cat();
console.log(cat.name);		//Tom
cat.sleep();			//Tom正在睡觉！
console.log(cat instanceof Animal);		//true
console.log(cat instanceof Cat);		//false
