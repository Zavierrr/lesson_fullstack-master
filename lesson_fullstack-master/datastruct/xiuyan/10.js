function ListNode(val) {
    this.val = val;
    this.next = null;
}

const n1 = new ListNode(1);
const n2 = new ListNode(2);
n1.next = n2;
const n1 = new ListNode(3);
n2.next = n3;
// 不用碰 n2 将n3插入到n1 n2中间
// n3.next = n1.next;
// n1.next = n3;

const target = new ListNode(0);
