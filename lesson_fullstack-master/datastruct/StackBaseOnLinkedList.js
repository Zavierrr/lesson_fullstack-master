// 节点，代替数组里的每个元素
class Node {
    // 链表因为有指针，不连续，new，每次申请新的内存空间
    constructor(element) {
        this.element = element;
        this.next = null;
    }

}
class StackBasedLinkedList {
    constructor() {
        this.top = null; // 空栈
    }
    push(value) {
        const node = new Node(value);
        if (this.top === null) {
            this.top = node;
        } else {
            // 链表头节点 赋给新节点的指针next，相当于被挤下去
            node.next = this.top;
            // 新的节点作为链表头节点
            this.top = node;
        }
    }
    pop() {
        if (this.top === null) {
            return -1;
        }

        // 取出头节点的值
        const value = this.top.element;
        // 旧的头节点出栈，新的节点赋给头节点
        this.top = this.top.next;
        return value;
    }

    clear() {
        this.top = null;
    }

    display() {
        if (this.top !== null) {
            let temp = this.top;
            while (temp !== null) {
                console.log(temp.element);
                temp = temp.next;
            }
        }
    }
}

module.exports = {
    StackBasedLinkedList,
    Node
}