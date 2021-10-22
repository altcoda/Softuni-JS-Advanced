function createFormatter(separator, symbol, symbolFirst, fn) {

    /* 
      Write a higher - order function createFormatter that fixes some of the parameters of
      another function. Your program will receive four parameters:
      three values and a function that takes 4 parameters and returns a
      formatted string(a monetary value with currency symbol).
  
      Your task is to return a partially applied function, based on the input function that 
      has its first three parameters fixed and only takes one parameter.
    */
  
    let newFn = fn.bind(null, separator, symbol, symbolFirst);
    return newFn
}
