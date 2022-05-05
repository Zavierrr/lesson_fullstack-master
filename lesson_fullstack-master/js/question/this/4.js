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
func.call(obj); // 立即执行
func.bind(obj); // 不立即执行，而是返回新的函数，仅仅是绑定this 指向obj，目的是方便异步
func.bind(obj)()(); // 此时就执行了