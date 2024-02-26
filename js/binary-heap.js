
export class BinaryHeap {
  constructor() {
    this.values = [];
  }

  /**
   * Adding elements to the maximal binary heap
   * 
   * @param {*} value - new value
   */
  enqueue(value) {
    this.values.push(value);
    this._bubbleUp();
  }

  /**
   * Bubbling maximum node value
   */
  _bubbleUp() {
    let elementIndex = this.values.length - 1;
    const element = this.values[elementIndex];

    while (elementIndex > 0) {
      const parentIndex = Math.floor((elementIndex - 1) / 2);
      const parent = this.values[parentIndex];

      if (element < parent) break;
      this.values[parentIndex] = element;
      this.values[elementIndex] = parent;
      elementIndex = parentIndex;
    }
  }

  /**
   * Removing the first element
   * 
   * @returns removed element
   */
  dequeue() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this._sinkDown();
    }
    return max;
  }

  /**
   * Heap regulation. Pop-up of maximum values
   * 
   */
  _sinkDown() {
    let elementIndex = 0;
    const length = this.values.length;
    const element = this.values[elementIndex];

    while (true) {
      let leftChildIndex = 2 * elementIndex + 1;
      let rightChildIndex = 2 * elementIndex + 2;
      let leftChild = null; 
      let rightChild = null;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.values[elementIndex] = this.values[swap];
      this.values[swap] = element;
      elementIndex = swap;
    }
  }
}
