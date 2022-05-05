// 两个世界 函数[call]  构造函数[constructor]
// [call] 指向全局
// [constructor] 指向实例
`use strict` // 严格模式下 this -> undefined
function Dog(type) {
    console.log(this);
    this.type = type;
}

// this是一个指针，和运行方式相关
Dog(); // 普通函数 call 
// node 后端
// new 运算符关键字
let dog = new Dog(); // this 指向 dog