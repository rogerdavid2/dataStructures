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

// Ouput: a string representation of the linked list [2, 5]
console.log(list.toString())

// Ouput: 1
console.log(list.indexOf(5))

// Output: [2, 5, 9]
list.addToTail(9)
console.log("After adding 9 to the tail: " + list.toString());

// Output: [2, 5]
list.removeFromTail(2)
console.log("After removing 9 from the tail: " + list.toString())


export default LinkedList;