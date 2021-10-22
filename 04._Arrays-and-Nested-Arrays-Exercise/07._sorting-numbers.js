function sortingNumbers(arr) {
    arr.sort((a, b) => a - b);
    const lowest = arr.slice(0, arr.length / 2);
    const highest = arr.slice(arr.length / 2).reverse();
    let newArr = [];
  
    // Loop until longer arr length
    for (let num = 0; num < Math.max(lowest.length, highest.length); num++) {
      if (lowest[num] != undefined) { newArr.push(lowest[num]) }
      if (highest[num] != undefined) { newArr.push(highest[num]) }
    }
  
    // If there is only one number return unmodified arr
    return arr.length > 1 ? newArr : arr
}
