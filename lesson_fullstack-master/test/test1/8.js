// replace 方法：
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var tocall = function (numbers) {
    var format = '(xxx) xxx-xxxx';
    for (let i = 0; i < numbers.length; i++) {
        format = format.replace('x', numbers[i]);
    }
    return format;
}
console.log(tocall(numbers));