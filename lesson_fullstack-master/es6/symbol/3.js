let s = Symbol();
let s2 = Symbol();
console.log(s == s2);

let obj = {
    a: 1,
    [Symbol()]: function (arg) {
        console.log('---')
    },
    [Symbol()]: function (arg) {
        console.log('+++')
    }
}
console.log(obj, '111');

console.log(Object.keys(obj)); // 'a'
console.log(Object.getOwnPropertyNames(obj)); // 'a'
console.log(Object.getOwnPropertySymbols(obj)); // Symbol(), Symbol()

// 遍历对象里的Symbol属性
Object.getOwnPropertySymbols(obj)
    .forEach(item => {
        // console.log(item);
        obj[item]();
    })