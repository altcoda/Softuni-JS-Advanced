function sumOfNumbers(n, m) {

  let startNum = Number(n);
  let endNum = Number(m);
  let sum = 0;
  
  for (let i = startNum; i <= endNum; i++) {
    sum += i;
  }

  return sum;
}
