const path = require('path') // 使用commonJS 模块化方案，引入 path 内置模块
// 物理路径
console.log(path.join(__dirname, 'dist')); // 路径拼接
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    }
}