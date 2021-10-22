function createProcessor() {
    let state = '';
  
    return {
      append,
      removeStart,
      removeEnd,
      print
    }
  
    function append(str) {
      state += str;
    }
  
    function removeStart(n) {
      state = state.slice(n)
    }
  
    function removeEnd(n) {
      state = state.slice(0, -n)
    }
  
    function print() {
      console.log(state)
    }
}
