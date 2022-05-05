// false   为假：undefined  null  NaN  ''  []  0  -0
// !''        === true
// !null      === true
// !undefined === true
// !0         === true
// !NaN       === true

let arr = [];
if (!undefined) {
    console.log('--------');
}
if (!arr.length) {// 长度为空
    console.log('--------');
}
console.log(typeof NaN); // number
