// 基于array 创建一个Stack 类
class ArrayStack {
    // 数据结构 = 特定数据存储 + 行为的组合
    constructor(n) {
        this.items = []; // 数据集合
        this.n = n; // 栈的容量 
        // this.count - 1 栈顶指针
        this.count = 0; // 初始栈为空  数据的数量
    }

    // 行为

    /**
     * @func 入栈
     * @param {*} item 
     * @returns boolean
     */
    push(item) {
        // 容量达到上限
        if (this.count >= this.n) return false;

        this.items[this.count] = item;
        this.count++;
        return true;
    }

    /**
     * @func 出栈
     * @returns null | *
     */
    pop() {
        if (this.count == 0) return null;
        let temp = this.items[this.count - 1];
        this.count--;
        return temp;
    }
}