// 对象 类型转换
const obj = {
    value: 1,
    valueOf() { // 转换为简单类型
        return 1
    }
}
console.log(obj == 1); // true
