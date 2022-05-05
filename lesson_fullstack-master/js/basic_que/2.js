// person @object
// 函数传值：
// 简单数据类型：值 （不影响外层）
// 对象：该对象的引用 （会影响外层）
function test(person) {
    let obj = {
        ...person
    }
    obj.name = 'X'
    obj.age = 26
    return obj
}

// 对象  值存放在堆内存中  p1存放的是地址
const p1 = {
    name: 'Zavier',
    age: 25
}

const p2 = test(p1);
console.log(p1); // Zavier 25
console.log(p2); // X 26