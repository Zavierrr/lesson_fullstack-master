// js 隐式转换
// 'use strict'
var x = '34' + 34;
var y = '34' - 34;
var m = 34 + '34';
var n = 34 - '34';
console.log(x, y, m, n); // 3434 0 3434 0
// +字符串拼接 -数字运算
// 巧用+/-规则转换类型
// num + '' 将num转换为字符串类型
// num - 0 将num转换为数字类型

function f() {
    console.log(this);
}
f();