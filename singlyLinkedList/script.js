import LinkedList from './linkedlist.js';
import ListNode from './listnode.js';


let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;

let list = new LinkedList(node1);

// Output: 5
console.log(list.head.next.data);

// Testing size: 2
console.log(list.size())

// Ouput: [2, 5]
console.log(list.toString())

// Ouput: 1
console.log(list.indexOf(5))

export default LinkedList;