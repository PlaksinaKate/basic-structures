export class HashTable {
  store = new Array(5);
  hash(key) {
    let sum = 0;
    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }

    return sum;
  }

  add(key, value) {
    this.store[this.hash(key)] = this.store[this.hash(key)] || [];
    this.store[this.hash(key)].push({ key, value })
  }

  get(key) {
    return this.store[this.hash(key)].find(item => item.key === key).value;
  }
}