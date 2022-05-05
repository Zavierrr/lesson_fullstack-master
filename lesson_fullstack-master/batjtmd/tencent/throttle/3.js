function sayHi() {
    console.log('Hello', this.name);
}
var person2 = {
    name: 'Christina',
    sayHi: sayHi
}

var person1 = {
    name: 'Yvettelau',
    friend: person2
}

// 当函数作为对象的方法时，this指向该对象
person1.friend.sayHi();