class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmptyList() {
    return !this.head && null
  }

  /**
   * takes a value and creates a new node with that value, placing it at the beginning of the linked list
   * 
   * @param {*} value - new value 
   */
  prepend(value) {
    const newListNode = new LinkedListNode(value, this.head);
    this.head = newListNode;

    if (!this.tail) this.tail = newListNode;

    return this;
  }

  /**
   * takes a value and creates a new node with that value, placing it at the end of the linked list
   * 
   * @param {*} value - new value
   */
  append(value) {
    const newListNode = new LinkedListNode(value, null);

    if (!this.tail || !this.head) {
      this.tail = newListNode;
      this.head = newListNode;
      return this;
    }

    this.tail.next = newListNode;
    this.tail = newListNode;

    return this;
  }

  /**
   * takes a value and removes all nodes that have the specified value
   * 
   * @param {*} value 
   */
  delete(value) {
    this.isEmptyList()

    let deletedNode = null;

    if (this.head && this.head.value === value) {
      deletedNode === this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;
    if (currentNode) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    if (this.tail && this.tail.value === value) {
      this.tail = currentNode;
    }

    return deletedNode;

  }

  /**
   *  The method takes a value as an argument, finds the first node with the same value, and returns it.
   * 
   * @param {*} value 
   */
  find(value) {
    this.isEmptyList()

    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;

    }

    return null;
  }

  /**
   * The method that removes the last node from the list and returns it.
   * 
   */
  deleteTail() {
    if (!this.tail) return null;

    let deletedNode = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return deletedNode;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        deletedNode = currentNode.next;
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;

    return deletedNode;
  }

  /**
   * A method that removes the first node from the list and returns it.
   *  
   */
  deleteHead() {
    this.isEmptyList()

    let deletedNode = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return deletedNode;
    }

    this.head = this.head.next;

    return deletedNode;
  }

  /**
   * takes an array of values ​​as an argument and creates new nodes from each element of the array, adding them to the end of the list in turn.
   * 
   * @param {*} array 
   */
  fromArray(array) {
    array.map((item) => this.append(item))
  }

  /**
   * a method that creates an array of all nodes and returns it.
   * 
   * @returns - Array
   */
  toArray() {
    let newArray = [];
    let currentNode = this.head;
    while (currentNode) {
      newArray = [...newArray, currentNode];
      currentNode = currentNode.next;
    }

    return newArray;
  }

  /**
   * a method that creates a reverse list by swapping nodes. The first node becomes last and the last node first, all nodes and their links change accordingly.
   * 
   * @returns  reversed list
   */
  reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;

    return this;
  }


}