var obj = {
    hi: function() {
        console.log(this, '=====');
        return () => {
            console.log(this, '-----');
        }
    },
    sayHi: function() {
        console.log(this, '^^^^^');
        return function() {
            console.log(this, '^^^^^');
            return () => {
                console.log(this, '++++++');
            }
        }
    },
    say: () => {
        console.log(this, '******');
    }
}
let sayHi = obj.sayHi(); // obj             第9行
let fun1 = sayHi(); // Object [global]      第11行      sayHi() = window.sayHi()
fun1(); // Object [global]                  第13行      fun1() = window.fun1()
let fun2 = sayHi.bind(obj)(); // obj        第11行      sayHi.bind(obj)() = obj.sayHi()
fun2(); // obj                              第13行