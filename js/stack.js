export class Stack {
  constructor() {
    this.values = {};
    this.frontIndex = -1;
  }

  /**
   * Print elements
   */
  print() {
    console.log(this);
  }

  /**
   * Returns a boolean value whether the queue is empty or not
   * 
   * @returns is the queue empty
   */
  isEmpty() {
    return this.values.length === 0;
  }

  /**
   * 
   * @returns queue length
   */
  size() {
    return this.values.length;
  }

  /**
   * 
   * @returns first value of the queue
   */
  front() {
    return this.values[0];
  }

  /**
   * Adds a value to the end of the queue
   * 
   * @param {*} item - new meaning
   */
  enqueue(item) {
    this.values[++this.frontIndex] = item;
  }

  /**
   * Removes the first value
   */
  dequeue() {
    if (!this.isEmpty()) {
      delete this.values[this.frontIndex--];
    }
  }
}
