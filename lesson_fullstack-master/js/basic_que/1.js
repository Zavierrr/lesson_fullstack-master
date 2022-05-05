// person @object
// 函数传值：
// 简单数据类型：值 （不影响外层）
// 对象：该对象的引用 （会影响外层）
function test(person) {
    person.age = 26; // 可读性不好，修改了外部变量（不纯）
    // 把person 改成了新对象（新地址）
    person = {
        name: 'yyy',
        age: 30
    }
    return person
}

// 对象  值存放在堆内存中  p1存放的是地址
const p1 = {
    name: 'Zavier',
    age: 25
}

const p2 = test(p1);
console.log(p1);
console.log(p2);