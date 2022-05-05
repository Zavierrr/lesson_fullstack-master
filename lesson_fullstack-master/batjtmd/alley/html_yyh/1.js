// 传统的面向对象
// es5 后期提供的   js 原来没有的
// 构造类 方法一
class Cat {
    // 构造器
    constructor(name) {
            this.name = name;
        }
        //
    makeSound() {
        console.log('喵');
    }
}

const catty = new Cat('咖啡');
catty.makeSound();
console.log(catty);