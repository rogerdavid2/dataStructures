import Queue from './queue.js';

let customQueue = new Queue();
let customQueueTwo = new Queue();

customQueue.enqueue(3);
// Output [3]
console.log(customQueue);

customQueueTwo.enqueue(45);
customQueueTwo.enqueue(88);
// Output [45, 88]
console.log(customQueueTwo);

// Output: [3]
console.log(customQueue.peek());

// Output: 1
console.log(customQueue.size());
