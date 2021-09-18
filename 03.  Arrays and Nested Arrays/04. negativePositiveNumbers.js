function negativePositiveNumbers(arr) {

    let ordered = [];
    arr.map(num =>
      Number(num) < 0 ?
      ordered.splice(0, 0, Number(num)) :
      ordered.push(Number(num))
    )
  
    return ordered.join('\n')
}
