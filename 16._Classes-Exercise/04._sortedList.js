class List {
  constructor() {
    this.size = 0;
    this.numbers = [];
  }

  _sort() {
    this.numbers.sort((a, b) => a - b)
  }

  _invalidIndexCheck(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('No such index')
    }
  }

  add(num) {
    this._sort()
    this.numbers.push(num)
    this.size++;
  }

  remove(index) {
    this._sort()
    this._invalidIndexCheck(index)
    this.numbers.splice(index, 1)
    this.size--;
    this._sort()
  }

  get(index) {
    this._invalidIndexCheck(index)
    this._sort()
    return this.numbers[index]
  }
}
