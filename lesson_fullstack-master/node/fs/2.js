const fs = require('fs');

const files = ['./a.txt', './b.txt', './readme.md']

for (let file of files) {
    // 可以为读取文件停下来 同步
    // 阻塞代码
    const data = fs.readFileSync(file);
    console.log(data.toString());
    // fs.readFile(file, (err, data) => {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    //     console.log(data.toString());
    // })
}