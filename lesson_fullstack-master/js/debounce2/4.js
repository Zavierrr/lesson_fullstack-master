// 给定一个非空字符串，最多删除一个字符，判断能否成为回文字符串
// 递归
// 1. 本身是回文  true
// 2. 不是回文 双指针 遍历字符串 递归
const validPalindromeOneC = function (s) {
    const len = s.length;
    let i = 0, j = len - 1;
    // 左右指针均满足对称时，一起向中间进发
    while (i < j) {
        if (s[i] === s[j]) {
            i++;
            j--;
        } else {
            return isPalindrome(i + 1, j) || isPalindrome(i, j - 1)
        }
    }
    // 判断是否是回文
    function isPalindrome(st, ed) {
        while (st < ed) {
            if (s[st] !== s[ed]) {
                return false;
            }
            st++;
            ed--;
        }
        return true;
    }
    return true;
}

console.log(validPalindromeOneC('avba'));