let hh = {
    name: 'Zavier'
}

// 写法一：
function sayHi1(x, y) {
    // 函数有this, arguments, prototype等
    console.log(arguments); // 当形参少于实参时,照样能访问

    // this 指向
    // 严格模式 this 没什么意义 undefined
    // 宿主环境    window(浏览器) || global(node 后端)
    // 手动绑定this
    console.log('Hello', this.name);
}

// 写法二：
// es6 reset 运算符
// ...args 剩余参数(展开运算符)
function sayHi2(...args) {
    console.log(args);
    console.log('Hello', this.name);
}

// 写法三：
function sayHi3() {
    console.log('Hello', this.name, ...arguments);
}

// call 第一个参数给this, 其余参数交给函数本身作为参数
// sayHi1.call(hh, 1, 2, 3); // 让普通函数运行,但是指定this 指向第一个参数(hh)
// sayHi2.call(hh, 1, 2, 3);
// sayHi3.call(hh, 1, 2, 3);
sayHi2.apply(hh, [1, 2, 3]); // 只允许用数组方式添加