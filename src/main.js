import { LinkedList } from './linkedlist.js';

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');
list.prepend('horse');

console.log(list.toString());
console.log(list.find('hamster'));  

list.insertAt('sheep', 3)
console.log(list.toString());
