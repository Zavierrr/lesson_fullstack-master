// 函数 判断 文件是否为图片
// a.txt
// b.jpg
// c.webp
// param 参数
/**
 * 代码最重要的 功能？（学校是）
 * 是可读性
 * @param {string} file 文件名
 * @return {Boolean} 是否是图片
 * @author Zavier 
 * @date 2022-3-29
 */

function checkIsImage(file) {
    console.log(file);
    
    // file 不能为空
    if (!file) {
        return false;
    }

    // console.log(file.split('.')[1]);
    // if (file.split('.')[1] == 'jpg') {
    //     return true;
    // }

    let imgFormats = ['jpg', 'gif', 'jpeg', 'png', 'svg', 'webp', 'awebp'];
    return imgFormats.indexOf(file.split('.')[1]) == -1 ? false : true;
    // 索引
    // 三元运算符

    // let position = ['jpg', 'gif', 'jpeg', 'png', 'svg', 'webp', 'awebp'].indexOf(file.split('.')[1]);
    // if (position == -1) {
    //     return false;
    // } else {
    //     return true;
    // }

    // return false;
}

console.log(checkIsImage('a.jpeg'));