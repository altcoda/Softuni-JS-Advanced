function everyNthElement(arr, n) {

    let filtered = [];
    for (let i = 0; i < arr.length; i += n) {
      filtered.push(arr[i])
    }
  
    return filtered;
}
