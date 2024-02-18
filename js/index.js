import { DoublyLinkedList } from "./doubly-linked-lists.js";
/* import { LinkedList } from "./linked-list.js";
 */
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
const doublyLinkedList = new DoublyLinkedList();
// doublyLinkedList.prepend('1');
// doublyLinkedList.append('2');
// doublyLinkedList.append('3');
// doublyLinkedList.delete('3');
// doublyLinkedList.append('4');
// doublyLinkedList.prepend('5');
// console.log(doublyLinkedList.find('1'));
// console.log(doublyLinkedList.deleteTail());
// console.log(doublyLinkedList.deleteHead());
console.log(doublyLinkedList.fromArray([1,2,3,4,5]));
console.log(doublyLinkedList.toArray());
console.log('doublyLinkedList', doublyLinkedList);


