// js 没有类，只有对象
var Cat = {
    // es5
    // createNew: function() {}
    // es6
    createNew(name) {
        var cat = {};
        cat.name = name;
        cat.makeSound = function() {
            console.log('喵');
        }
        return cat;
    }

}

var tom = Cat.createNew('阿莱');
console.log(tom);
var garfield = Cat.createNew('加菲猫');
console.log(garfield);