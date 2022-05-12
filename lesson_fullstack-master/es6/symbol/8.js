console.log(Symbol('1') == Symbol('1'));  //false
var sy = sb = Symbol('a');  // a是Symblo的标签
console.log(sy == sb); // true

var PClass = (function () {
    // 私有
    const a = Symbol('a');
    const m = Symbol('m');
    function P() {
        this[a] = 'a是私有变量';
        console.log(this[a], '++++++++++++');

        this.b = '变量B 公有属性';
        this[m] = function () { // 私有方法
            console.log('---------');
        }
    }
    P.prototype = {
        getA() {
            console.log(this[a]);
            this[m]();
        }
    }
    return P;
})();

// const c = 12121;
const pc = new PClass();
console.log(pc.b);
console.log(pc.a); // undefind
pc.getA();