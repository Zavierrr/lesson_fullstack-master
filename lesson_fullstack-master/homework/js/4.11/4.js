// ES6
function foo() {
    setTimeout(() => {
        console.log('id:', this.id);
    }, 100);
}

// ES5
function foo() {
    var _this = this;

    setTimeout(function() {
        console.log('id:', _this.id);
    }, 100);
}
// 箭头函数根本没有自己的this，导致内部的this就是外层代码块的this，正是因为它没有this，所以也就不能用作构造函数
// 箭头函数的特点，语法简单、没有自己的 this、arguments、new、prototype、super或new.target
// obj不是一个封闭的作用域
// 由于箭头函数是作为对象字面量的属性定义的,对象字面量在全局代码中定义,因此,箭头函数内部的this值与全局函数的this值相同
// 如果箭头函数被非箭头函数包含,则this绑定指向的是最近一层非箭头函数的this;否则,this的值会被设置为全局对象
// 总结：----------------------------------------------------------------
// 箭头函数：this等同于上一层非箭头的函数（对象不算）的this值或全局对象（window或undefined）
// this：谁调用归谁