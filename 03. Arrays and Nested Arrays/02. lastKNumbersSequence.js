function lastKNumbersSequence(n, k) {
    let arr = [1];
    for (let i = 1; i < n; i++) {
      const NumToAdd = arr.slice(Math.max(0, i - k), i).reduce((a, b) => a + b);
      arr.push(NumToAdd);
    }
    return arr
}
