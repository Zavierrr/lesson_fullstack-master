//构造函数
function Animal(name) {
    this.name = name || 'Animal';
    this.sleep = function () {
        console.log(this.name + '正在睡觉！');
    };
}
//原型上面的方法：
Animal.prototype.eat = function (food) {
    console.log(this.name + '正在吃:' + food);
}

//-------------------------------------------------------------------------
// 构造继承
// 核心：使用父类的构造函数增强子类实例，等于是复制父类的实例属性给子类（没用到原型）
function Cat(name) {
    Animal.call(this, arguments);
    this.name = name || 'Tom';
}

var cat = new Cat();
console.log(cat.name);		//Tom
cat.sleep();    //Tom正在睡觉！
console.log(cat instanceof Animal);		//false
console.log(cat instanceof Cat);		//true
