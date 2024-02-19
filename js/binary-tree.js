export class BinaryTreeNode {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.parent = parent;
    this.value = value;
  }

  get height() {
    const leftHeight = this.left ? this.left.height + 1 : 0;
    const rightHeight = this.right ? this.right.height + 1 : 0;
    return Math.max(leftHeight, rightHeight);
  }

  setLeft(node) {
    if(this.left) {
      this.left.parent = null;
    }
    if(node) {
      this.left = node;
      this.left.parent = this;
    }
  }

  setRight(node) {
    if(this.right) {
      this.right.parent = null; 
    }
    if(node) {
      this.right = node;
      this.right.parent = this;
    }
  }
}