function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next)
}

// 前驱节点 后继节点

const a1 = new ListNode(1);
const a2 = new ListNode(2);
const a3 = new ListNode(3);
const a4 = new ListNode(4);
const a5 = new ListNode(5);
const head = new ListNode(0);

head.next = a1;
a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a5;

var reverseList = function (head) {
    let prev = null, cur = head;
    while (cur) {
        const next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev
};

console.log(reverseList(head));
