function add(a, b, c, d) {
    return a + b + c + d;
}
// 参数的个数
// console.log(add.length); 

/**
 * @func 函数柯里化
 * @param {function} fn
 * @returns function
 */
function curry(fn) {
    // 函数嵌套函数，内部函数会被返回到外部，并得以执行
    // 闭包空间中
    // 慢慢收集拿到参数
    // fn 等在闭包空间里的永生变量在闭包函数声明时已经存在
    // 声明时
    let judge = (...args) => {
        if (args.length == fn.length) return fn(...args);
        return (...arg) => judge(...args, ...arg);
    }
    return judge;
}

let addCurry = curry(add);
console.log(addCurry(1)([2, 3])(3));  //一次接受一个参数，....，
// 直到接受到的参数满足add需要的参数 执行 并返回结果