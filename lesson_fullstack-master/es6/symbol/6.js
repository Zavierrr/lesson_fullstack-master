/**
 * @func 用filter实现数组去重
 * @author Zavier
 * @date 2022-5-7
 */

const spread = [12, 5, 8, 8, 130, 44, 130];
const uniqueArr = spread.filter((item, index, arr) => {
    // console.log(item,index,arr);
    // 重复项就false
    // 返回某个指定的字符串值在字符串中 “首次” 出现的位置
    // 例如：8首次出现下标为2，第一个8进入数组，第二个8下标为3，此时2 != 3，结果为false，所以第二个8不进入数字
    return arr.indexOf(item) == index;
})
console.log(uniqueArr);

// 用Set实现
// es6 新的数据结构
let set = new Set(spread)
const arr = [...set];
console.log(Object.prototype.toString.call(set), arr);
