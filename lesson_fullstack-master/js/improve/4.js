const fs = require('fs'); // fs（fileSystem 硬盘） node 内置的模块
fs.readFile('./2.js', function(err, data) {
        console.log(data.toString());
    })
    // 去硬盘查找，需要等待且耗时 


console.log('1111111111'); // 同步