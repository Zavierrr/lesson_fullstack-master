// Animal 父类     ->  Dog 子类
// 1. extends 
// 2. super
class Animal {
    constructor(name) {
        this.name = name;
        this.thirst = 100;
        this.belly = [];
    }
    drink() {
        this.thirst -= 10;
        return this;
    }
    eat(food) {
        this.belly.push(food);
        return this;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed; // 子类独有
    }
    bark() {
        console.log('汪汪汪！');
    }
}

const sunny = new Dog('Sunny');
console.log(sunny.name);
console.log(sunny.eat('meat'));
sunny.drink();
console.log(sunny.thirst);
sunny
    .eat('肯德基')
    .drink()
    .eat('火锅')
    .drink()
console.log(sunny.thirst, sunny.belly);



