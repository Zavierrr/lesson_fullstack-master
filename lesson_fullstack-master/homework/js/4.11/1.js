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

console.log(obj.b);
let hi = obj.hi(); // obj               第3行
hi(); // obj                            第5行
let sayHi = obj.sayHi(); // obj         第9行       
let fun1 = sayHi(); // Object [global]  第11行      sayHi() = window.sayHi()
fun1(); // Object [global]              第13行      fun1() = window.fun1()
obj.say(); // {} 全局                   第18行
console.log(this); // {}
// obj.sayHi()()();