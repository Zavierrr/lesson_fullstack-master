// 字符串里的算法
// 判断一个字符串是否为回文字符串
// 一：
function isPalindrome(str) {
    const reverseStr = str.split('').reverse().join('');
    return reverseStr == str;
}
console.log(isPalindrome('aaavva'));
