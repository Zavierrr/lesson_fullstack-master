// call(thisObj, param1, param2...)
// 手写call方法
// 函数关键字，如Object Array
// Function
Function.prototype.call2 = function(...args) {
    // console.log('call2', thisObj, args);
    let thisObj = args[0] ? args[0] : null;
    // console.log(args.slice(1));
}

let hh = {
    name: 'Zavier'
}

function func() {

}
func.call2(hh, 1, 2, 3);
console.log(func.__proto__);
// 未定义call2时，结果为 {}
// 定义call2后，结果为 { call2: [Function (anonymous)] }
console.log(func instanceof Function); // true