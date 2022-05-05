// JS弱类型高级动态语言，声明变量时不需要确定数据类型，变量的数据类型由值确定

// 简单数据类型
let var1 = 'Zavier';
let obj = { name: 'Zavier' };
obj.sex = '男'; // 动态添加属性
let var2 = var1; // 赋值操作    给var2申请新的地址，将var1的值赋给var2
console.log(var2);
var2 = 'Z';
console.log(var1);
console.log(var2);

// 复杂数据类型
let var3 = { name: 'Zavier' };
let var4 = var3; // 给的是内存地址，指向同一个内存地址
console.log(var4.name);
var3.name = 'Z';
console.log(var3.name);
console.log(var4.name);