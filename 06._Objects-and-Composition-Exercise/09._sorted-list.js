function createSortedList() {

    const isValid = (index, arr) => index >= 0 && index < arr.length;
  
    return {
      list: [],
      size: 0,
      add(element) {
        this.list.push(Number(element));
        this.list = this.list.sort((a, b) => a - b);
        this.size = this.list.length;
      },
      remove(index) {
        if (isValid(index, this.list)) {
          this.list.splice(index, 1)
        }
        this.size = this.list.length;
      },
      get(index) {
        if (isValid(index, this.list)) {
          return this.list[index];
        }
      }
    };
}
