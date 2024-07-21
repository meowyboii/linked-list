class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  prepend(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const prevHead = this.head;
      this.head = newNode;
      newNode.next = prevHead;
    }
    this.length++;
  }
  size() {
    return this.length;
  }
  head() {
    return this.head;
  }
  tail() {
    return this.tail;
  }
  at(index) {
    let indexNode = this.head;
    for (let i = 0; i < index; i++) {
      indexNode = indexNode.next;
    }
    return indexNode;
  }
  pop() {
    if (this.head === null) {
      console.log("The linked list is empty");
      return;
    }
    if (this.length === 1) {
      this.head = null;
      console.log("The linked list is empty");
      return;
    }
    let prevTail = this.head;
    while (prevTail != null) {
      if (prevTail.next === this.tail) break;
      prevTail = prevTail.next;
    }
    prevTail.next = null;
    this.tail = prevTail;
    this.length--;
  }
  contains(value) {
    let curr = this.head;
    while (curr != null) {
      if (curr.value === value) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  }
  find(value) {
    let curr = this.head;
    let index = 0;
    while (curr != null) {
      if (curr.value === value) {
        return index;
      }
      index++;
      curr = curr.next;
    }
    return null;
  }
  toString() {
    let curr = this.head;
    let listString = "";
    while (curr != null) {
      listString += "( " + curr.value + " )" + " -> ";
      curr = curr.next;
    }
    listString += "null";
    console.log(listString);
  }
}
const newList = new LinkedList();
newList.append(3);
newList.append(4);
newList.prepend(2);
newList.prepend(1);
newList.toString();

console.log(newList.contains(5));
console.log("Found at index: " + newList.find(4));
console.log("The value at index 3 is: " + newList.at(3).value);
console.log("The size of the linked list is: " + newList.size());
newList.pop();
newList.toString();
newList.pop();
newList.pop();
newList.pop();
newList.toString();
