const name = 'Manny';
const age = 10;
function sayMyDog(name, age) {
    // es6字符串模板
    return `My dog ${name} is ${age} years old.`;
    // return 'My dog ' + name + ' is ' + age + ' years old.';
}
console.log(sayMyDog(name, age));

// 没有名字的函数叫匿名函数
// 构造函数 首字母大写
// 箭头函数 依托匿名函数 不需要function 关键字
// 如果函数体只有一句代码，且是返回值的话，可以省略 {} 和 return
const MyDog = (name, age) => `My dog ${name} is ${age} years old.`
console.log(MyDog(name, age));