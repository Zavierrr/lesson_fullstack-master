var obj = {
    // es6 对象字面量简写
    hi() {
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

const func = obj.ji;
func(); // 调用方式是 普通函数

// 返回 箭头函数 this -> window
const innerFunc = func();
innerFunc();
// 返回 箭头函数 this -> obj
obj.hi()();