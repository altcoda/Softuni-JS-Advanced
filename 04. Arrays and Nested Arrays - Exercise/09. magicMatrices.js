function magicMatrixes(matrix) {

    let sums = new Set(); // set of unique sums
  
    // Sum rows and add sum to set
    for (let i = 0; i < matrix.length; i++) {
      let sum = 0;
      for (let a = 0; a < matrix.length; a++) {
        sum += matrix[i][a];
      }
      sums.add(sum)
    }
  
    // Sum columns and add sum to set
    for (let i = 0; i < matrix.length; i++) {
      let sum = 0;
      for (let a = 0; a < matrix.length; a++) {
        sum += matrix[a][i];
      }
      sums.add(sum)
    }
  
    return sums.size === 1;
}
