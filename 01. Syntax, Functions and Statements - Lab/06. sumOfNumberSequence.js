function sumOfNumbers(n, m) {
    let sum = 0;
    let startNum = Number(n);
    let endNum = Number(m);
  
    for (let i = startNum; i <= endNum; i++) {
      sum += i;
    }
    
    console.log(sum)
}
