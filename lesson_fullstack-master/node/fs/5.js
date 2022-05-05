var fs = require('fs');
var path = require('path'); // 路径上升到模块

/**
 * @func 找出指定目录下最大的文件
 * @param {string} dir 
 * @param {function} cb 
 */
function findLargest(dir, cb) {
    fs.readdir(dir, (err, files) => {
        // console.log(files);
        if (err) {
            return cb(err);
        }
        console.log(files);
        // cb(null,files);
        // 是文件，还是目录
        // fs.readFile(files[0]);
        var couter = files.length;  // 数量
        var errored = false;   // 是否出错
        var stats = [];
        files.forEach((file, index) => {
            // 得到相对于当前4.js相对的目录
            // console.log(file);
            fs.stat(path.join(dir, file), (err, stat) => {
                // console.log(stat);
                // console.log(path.join(dir, file));
                // console.log(files);
                if (errored) return;
                if (err) {
                    errored = true;
                    return cb(err)
                }
                stats[index] = stat; // 所有文件信息 如数组了
                // console.log(index);

                console.log(couter);
                // couter--;
                if (--couter == 0) { //最后一个

                    var fileStats = stats
                        // .map  把一个数组  变成一个新的数组
                        .filter((stat) => stat.isFile());
                    console.log(fileStats.length, '--------------');

                    let maxFileSize = 0;
                    for (let fileStat of fileStats) {
                        if (fileStat.size > maxFileSize) {
                            maxFileSize = fileStat.size;
                        }
                    }
                    cb(null, maxFileSize);
                    // console.log(largest);
                }
            });
        })
    }) // 异步
}

findLargest('./test', (err, fileSize) => {
    if (err) {
        return console.log(err);
    }
    console.log('largest file war', fileSize);
})


// var fs = require('fs');
// var path = require('path');
// function findLargest(dir, cb) {
//     // 读取目录下的所有文件 
//     fs.readdir(dir, function (er, files) {
//         if (er) return cb(er);
//         var counter = files.length;
//         var errored = false;
//         var stats = [];
//         files.forEach(function (file, index) { // 读取文件信息 
//             fs.stat(path.join(dir, file),
//                 function (er, stat) {
//                     if (errored)
//                         return;
//                     if (er) {
//                         errored = true;
//                         return cb(er);
//                     }
//                     stats[index] = stat;
//                     // 事先算好有多少个文件，读完 1 个文件信息，计数减 1，当为 0 时，说明读取完毕，此时执行最终的比较操作
//                     if (--counter == 0) {
//                         var largest = stats.filter(function (stat) {
//                             return stat.isFile()
//                         }).reduce(function (prev, next) {
//                             if (prev.size > next.size)
//                                 return prev
//                             return next
//                         })
//                         cb(null, files[stats.indexOf(largest)])
//                     }
//                 })
//         })
//     })
// }