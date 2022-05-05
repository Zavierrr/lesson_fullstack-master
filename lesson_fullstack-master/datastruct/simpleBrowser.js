// js 早期版本没有class关键字
// es6提供了class关键字，但只是语法糖，底层仍然是原型式面向对象
class SimpleBrowser {
    constructor() {
        this.x = 1;
    }
    push() {

    }
}
const browser = new SimpleBrowser();
for (let key in browser) {
    console.log(key);
}

console.log(browser.push());
console.log('push' in browser);
console.log(browser.__proto__.constructor.prototype);
// browser.push();