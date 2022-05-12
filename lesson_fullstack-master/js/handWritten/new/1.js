function objectFactory() {  // new
    // Person 普通函数运行以下
    // 原型式面向对象 没有血缘关系
    let obj = {};
    // var Constructor = arguments[0];
    // var Constructor = arguments.shift(); // 报错  arguments是伪数组
    // var Constructor = [...arguments].shift();

    // call可以手动指定函数运行时this的指向
    // argument是伪数组，call把数组shift方法借给argumrnt使用
    var Constructor = [].shift.call(arguments);
    obj.__proto__ = Constructor.prototype;
    // 意思是在obj里执行构造函数，并且挨着arguments里剩下的参数
    var ret = Constructor.apply(obj, arguments);
    return typeof ret === 'object' ? ret || obj : obj;//实例
}

function Person(name, age) {
    this.name = name;
    this.age = age;
    return null; // 忽略
    // return {
    //     name,
    //     age,
    //     bb:'11'
    // }
}

let p = objectFactory(Person, 'Zavier', 18);  // 引用式赋值
console.log(p.name);