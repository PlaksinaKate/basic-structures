import { LinkedList } from "./linked-list.js";

const linkedList = new LinkedList();
linkedList.prepend('Привет!');
linkedList.prepend('Середина');
linkedList.append('Пока!');

console.log(linkedList.deleteHead());
console.log(linkedList.find('Привет!'));
linkedList.fromArray(['Привет!', 'Шел', 'Вася']);
console.log(linkedList);
console.log(linkedList.toArray());
console.log(linkedList.reverse());


