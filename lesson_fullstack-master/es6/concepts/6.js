const obj = {
    name: 'Zavier',
    food: '西瓜'
}

// const name1 = obj.name;
// const food1 = obj.food;
// es6 提供优雅的API 解构
const { name, food } = obj;
console.log(name, food);
// let name = '123'; // Identifier 'name' has already been declared


// 写法一：
function introduct(name, food) {
    console.log(`${name}, 旅梦的好朋友，最喜欢吃${food}`);
}
introduct(name, food);
// 写法二：解构
function introduct({ name, food }) {
    console.log(`${name}, 旅梦的好朋友，最喜欢吃${food}`);
}
introduct(obj);