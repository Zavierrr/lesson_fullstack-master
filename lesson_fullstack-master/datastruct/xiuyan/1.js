// 怎么创建数组？
const arr = []; // easy way 随意  length没定，items类型也没定

// 数组相对于链表，更方便，默认用数组来实现
// 使用构造函数不是为了创造空数组这么无聊
const arr1 = new Array(7); // <7 empty items>
console.log(arr1);

const arr2 = (new Array(7)).fill(1);
console.log(arr2); // 填充7个1