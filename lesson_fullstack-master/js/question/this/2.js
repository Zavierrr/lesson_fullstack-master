// es6 可以给函数属性默认值，即在形参赋值
function Person(name = '未命名', age) {
    this.name = name;
    this.age = age;
    this.count = 1;
}
let hh = new Person();
Person.count = 0; // 类，构造函数的静态属性（static），类似于私有属性
Person.species = '人类'
Person.prototype = {
    num: 0, // 只需定义一次，不需要每个实例都定义一次，更省内存
}
console.log(hh.count); // 这里访问的是实例的count，而非Penson类里的count