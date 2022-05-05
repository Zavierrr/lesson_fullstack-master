// 浏览器前进后退功能
// 1. 面向对象模块化思想
// 一个文件一个类
// 2. 引入其他模块

const { StackBasedLinkedList } = require('./StackBaseOnLinkedList');
console.log(StackBasedLinkedList);
class Browser {
    constructor() {
        this.normalStack = new StackBasedLinkedList();
        this.backStack = new StackBasedLinkedList();
    }
    pushNormal(name) {
        this.normalStack.push(name); // 网页入栈
        this.backStack.clear(); // 只要有新元素入栈，就清空回退栈
    }
    displayAllStack() {
        console.log('---后退页面---');
        this.backStack.display();
        console.log('---浏览页面---');
        this.normalStack.display();
    }
    back() {
        // normalStack pop
        // backStack push
        // 判断为空
        let temp = this.normalStack.pop();
        if (temp !== -1) {
            this.backStack.push(temp);
            this.displayAllStack();
        } else {
            console.log('无法后退！');
        }
    }
    front() {
        let temp = this.backStack.pop();
        if (temp !== -1) {
            this.backStack.pop();
            this.normalStack.push(temp);
        } else {
            console.log('无法后退！');
        }
    }
}

let browser = new Browser();
browser.pushNormal('www.google.com');
browser.pushNormal('www.baidu.com');
browser.pushNormal('www.tencent.com');
browser.back();
browser.back();
browser.front();
browser.pushNormal('www.qq.com');
browser.displayAllStack();