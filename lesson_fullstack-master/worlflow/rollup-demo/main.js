// js 单点入口
// require 属于 node 后端运行环境的关键字，不支持浏览器前端运行环境
// js 不同运行环境下有差异
// 模块化方案（module）
// JS 早期没有模块化方案
// 早期任务比较简单，所以不需要模块化，后期后端开发任务繁重，才开始模块化（commonJS），再后来前端框架开始流行，es6模块化
// commonJS 模块化方案（node）  require  +  module.export
// es6 模块化方案（前端浏览器）  import from  + export default （type = "module"）
// 模块输出后就结束了
// var { counter, incCounter } = require('./lib')  // require 关键字
var mod = require('./lib')  // require 关键字
console.log(mod.counter); // 3
mod.incCounter();
console.log(mod.counter); // 4

