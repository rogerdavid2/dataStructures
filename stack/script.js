import Stack from './stack.js';

let customStack = new Stack();
let customStackTwo = new Stack();
let customStackThree = new Stack();
let customStackFour = new Stack();

customStack.push(3);
customStack.push(5);
customStack.push(7);
customStack.push(9);

// Output: [3, 5, 7, 9]
console.log(customStack.toString())

customStackTwo.push(33);
customStackTwo.push(44);

// Output: [33, 44]
console.log(customStackTwo.toString())

// Output: 44
console.log(customStackTwo.peek())
// Output: false
console.log(customStackTwo.isEmpty());

// Output: true
console.log(customStackThree.isEmpty());

customStackFour.push(100)
customStackFour.push(200);
console.log(customStackFour.toString());

// Output: [100]
customStackFour.pop();
console.log(customStackFour.toString())

// Output: []
customStackFour.pop();
console.log(customStackFour.toString())