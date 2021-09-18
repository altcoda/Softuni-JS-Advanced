function smallestTwoNumbers(arr) {
    const firstSmallest = Math.min(...arr);
    arr.splice(arr.indexOf(firstSmallest), 1);
    const secondSmallest = Math.min(...arr);
  
    return `${firstSmallest} ${secondSmallest}`
}
