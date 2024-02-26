export class Queue {
  constructor() {
    this.values = {};
    this.frontIndex = 0;
    this.backIndex = -1;
  }

  print() {
    console.log(this);
  }

  isEmpty() {
    return this.values.length === 0;
  }

  size() {
    return this.values.length;
  }

  front() {
    return this.values[0];
  }

  enqueue(item) {
    this.values[++this.backIndex] = item;
  }

  dequeue() {
    if (this.isEmpty()) {
      delete this.values[this.frontIndex++];
    }
  }
}
