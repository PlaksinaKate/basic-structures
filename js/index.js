//import { DoublyLinkedList } from "./doubly-linked-lists.js";
//import { LinkedList } from "./linked-list.js";
//import { BinaryTreeNode } from "./binary-tree.js";
//import { BinaryHeap } from "./binary-heap.js";
import { Queue } from "./queue.js";
import { Stack } from "./stack.js";
//import { HashTable } from "./hash-table.js";

/* LinkedList */
// const linkedList = new LinkedList();
// linkedList.prepend('Привет!');
// linkedList.prepend('Середина');
// linkedList.append('Пока!');

// console.log(linkedList.deleteHead());
// console.log(linkedList.find('Привет!'));
// linkedList.fromArray(['Привет!', 'Шел', 'Вася']);
// console.log(linkedList);
// console.log(linkedList.toArray());
// console.log(linkedList.reverse());

/* DoublyLinkedList */
// const doublyLinkedList = new DoublyLinkedList();
// doublyLinkedList.prepend('1');
// doublyLinkedList.append('2');
// doublyLinkedList.append('3');
// doublyLinkedList.delete('3');
// doublyLinkedList.append('4');
// doublyLinkedList.prepend('5');
// console.log(doublyLinkedList.find('1'));
// console.log(doublyLinkedList.deleteTail());
// console.log(doublyLinkedList.deleteHead());
// console.log(doublyLinkedList.fromArray([1,2,3,4,5]));
// console.log(doublyLinkedList.toArray());
// console.log('doublyLinkedList', doublyLinkedList);

/* BinaryTree */
// let aNode = new BinaryTreeNode('a');

// let bNode = new BinaryTreeNode('b');
// aNode.setLeft(bNode);

// let cNode = new BinaryTreeNode('c');
// aNode.setRight(cNode);

// let dNode = new BinaryTreeNode('d');
// bNode.setRight(dNode);

// let eNode = new BinaryTreeNode('e');
// cNode.setLeft(eNode);

// let fNode = new BinaryTreeNode('f');
// cNode.setRight(fNode);

// console.log('BinaryTreeNode', aNode);

// Hash table
// const dist = new HashTable();
// dist.add('ab', '1');
// dist.add('ba', '2');
// console.log(dist);
// console.log(dist.getLength());


//BinaryHeap
// const binaryHeap = new BinaryHeap();
// binaryHeap.enqueue(1);
// binaryHeap.enqueue(2);
// binaryHeap.enqueue(0);
// binaryHeap.enqueue(3);

// console.log(binaryHeap.dequeue());
// console.log(binaryHeap.dequeue());
// console.log(binaryHeap);


// Queue
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
queue.dequeue();
queue.print();

//Stack
const stack = new Stack();
stack.enqueue(1);
stack.enqueue(2);
stack.enqueue(3);
stack.dequeue();
stack.print();