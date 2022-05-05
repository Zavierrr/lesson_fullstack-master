// splice方法用于删除原数组的一部分成员，并可以在删除的位置添加新的数组成员，返回值是被删除的元素。注意，该方法会改变原数组。
 
// arr.splice(start, count, addElement1, addElement2, ...)
 
// splice的第一个参数是删除的起始位置（从0开始），第二个参数是被删除的元素个数。如果后面还有更多的参数，则表示这些就是要被插入数组的新元素。
 
var a = ['a', 'b', 'c', 'd', 'e', 'f'];
a.splice(4, 2) // ["e", "f"]
a // ["a", "b", "c", "d"]
 
// 上面代码从原数组4号位置，删除了两个数组成员。
 
var a = ['a', 'b', 'c', 'd', 'e', 'f'];
a.splice(4, 2, 1, 2) // ["e", "f"]
a // ["a", "b", "c", "d", 1, 2]
 
// 上面代码除了删除成员，还插入了两个新成员。
 
// 起始位置如果是负数，就表示从倒数位置开始删除。
 
var a = ['a', 'b', 'c', 'd', 'e', 'f'];
a.splice(-4, 2) // ["c", "d"]
 
// 上面代码表示，从倒数第四个位置c开始删除两个成员。
 
// 如果只是单纯地插入元素，splice方法的第二个参数可以设为0。
 
var a = [1, 1, 1];
 
a.splice(1, 0, 2) // []
a // [1, 2, 1, 1]
 
// 如果只提供第一个参数，等同于将原数组在指定位置拆分成两个数组。
 
var a = [1, 2, 3, 4];
a.splice(2) // [3, 4]
a // [1, 2]