// 没有解决类与实例的关系
function Cat(name) {
    return {
        name: name
    }
}
let cat1 = Cat('大猫');
let cat2 = Cat('二猫');
console.log(cat1, cat2);
console.log(cat1.constructor); // Object 即对象字面量的构造函数