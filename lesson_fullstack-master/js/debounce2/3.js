// 字符串里的算法
// 判断一个字符串是否为回文字符串
// 从中间位置劈开 两边的两个字符串内容上是全对称的
// 二：
function isPalindrome(str) {
    let len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] != str[len - 1 - i]) {
            return false
        }
    }
    return true
}
console.log(isPalindrome('aaaa'));