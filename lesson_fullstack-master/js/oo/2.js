var Cat = {
    name: '大猫',
    makeSound: function() {
        console.log('喵');
    },
    eat: function() {
        console.log('猫粮');
    }
}

// Cat 模板
// var gerfield = {
//     name: '加菲猫',
//     makeSound: function() {
//         console.log('喵');
//     }
// }
// var tom = {
//     name: 'Tom',
//     makeSound: function() {
//         console.log('喵');
//     }
// }
var tom = Object.create(Cat);
console.log(tom);
tom.name = 'Tom';
console.log(tom);
tom.makeSound();
console.log(tom.__proto__);
console.log(tom.__proto__.constructor);