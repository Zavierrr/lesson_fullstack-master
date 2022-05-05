// 编写一个函数，它接受一个用10个整数组成的数组（0-9），
// 返回格式是 (123) 456-7890的电话号码 字符串

// subString
// 返回指定的子字符串，开始索引（包括），结束索引（不包括）；如果只有一个索引，则从此位置一直截取到末尾
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var tocall = function (numbers) {
    // 字符串模板解法：
    // return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
    numbers = numbers.join('');
    console.log(numbers);
    return `(${numbers.substring(0, 3)}) ${numbers.substring(3, 6)}-${numbers.substring(6)}`;
}
console.log(tocall(numbers));