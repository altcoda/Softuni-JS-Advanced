function increasingSubset(arr) {
    return arr.map(Number).reduce((arr, b) => {
      if (b >= arr[arr.length - 1] || arr.length === 0) { arr.push(b); }
      return arr;
    }, [])
}
