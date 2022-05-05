`use strict`;
// this有新方案
// 箭头函数，会作为普通函数调用
// 箭头函数没有this,只是通过作用域链一层一层向外部查找this，直到查找到全局
console.log(this, '----');
const func = (a) => {
    console.log(this);
    return a;
}
func(1);

const func1 = () => {}
let o = new func1(); // func1 is not a constructor