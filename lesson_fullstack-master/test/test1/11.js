// const reg = /[0-9]{11}/;
// \d 表示数字
const reg = /1\d{10}/g;
console.log(reg.test('12345678901sdsadf12345678901'));
console.log('12345678901sdsadf12345678901'.match(reg));