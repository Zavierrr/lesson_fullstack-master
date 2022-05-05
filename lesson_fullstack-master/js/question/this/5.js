// 1. 简单数据类型 除了null之外，其他都靠谱
// 原因：用二进制前三位表示类型
// null 的前三位二进制为     000
// Object 的前三位二进制为   000
console.log(typeof null); // Object ？ js bug
console.log(typeof 1, typeof 'aaa', typeof undefined, typeof false);
// 判断为null
const isUndefined = val => val === undefined;
// const isUndefined = val => typeof val === 'undefined';
const isNull = val => val === null; // 恒等指和类型都相等
const isNil = val => val === undefined || val === null; // 判断为空或未定义

let a;
let b = null;
console.log(isUndefined(a));