// 执行栈 js 语言得以运行
// 逐行执行
// 执行栈 顶部 当前正在运行的代码
// 全局栈 f1 f2 栈底 FILO
f2(); // 出栈 回收内存
f1();

function f1() {
    console.log('f1');
}

function f2() {
    var a = 1
    console.log('f2');
}