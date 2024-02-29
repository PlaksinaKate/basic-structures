export class Graph {
  #vertices = new Set();
  #adjacentList = new Map();

  get vertices() {
    return Array.from(this.#vertices);
  }

  get adjacentList() {
    const list = {};

    this.#adjacentList.forEach((val, key) => {
      list[key] = Array.from(val);
    });

    return list;
  }

  addVertex(vertex = null) {
    if (!this.#vertices.has(vertex) && vertex) {
      this.#vertices.add(vertex);
      this.#adjacentList.set(vertex, new Set());
    }
  }

  addEdge(vertex1 = null, vertex2 = null) {
    if (vertex1 && vertex2 && vertex1 !== vertex2) {
      this.addVertex(vertex1);
      this.addVertex(vertex2);
      this.#adjacentList.get(vertex1).add(vertex2);
      this.#adjacentList.get(vertex2).add(vertex1);
    }
  }
}
