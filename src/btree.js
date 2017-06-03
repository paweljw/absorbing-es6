export class Node {
  constructor (value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }

  insert (value) {
    if (value <= this.value) {
      this._makeOrInsert('left', value)
    } else {
      this._makeOrInsert('right', value)
    }
  }

  _makeOrInsert (node, value) {
    if (this[node]) {
      this[node].insert(value)
    } else {
      this[node] = new Node(value)
    }
  }

  * [Symbol.iterator] () {
    if (this.left) yield * this.left
    yield this.value
    if (this.right) yield * this.right
  }
}
