function spiralMatrix(rows, cols) {

    // Create empty NxN matrix
    let matrix = [];
    for (let i = 0; i < rows; i++) {
      matrix.push(new Array(cols))
    }
  
    let startCol = 0;
    let startRow = 0;
    let endCol = Number(cols) - 1;
    let endRow = Number(rows) - 1;
    let counter = 1;
  
    while (startCol <= endCol && startRow <= endRow) {
      for (let i = startCol; i <= endCol; i++) {
        matrix[startRow][i] = counter;
        counter++;
      }
  
      startRow++;
      for (let j = startRow; j <= endRow; j++) {
        matrix[j][endCol] = counter;
        counter++;
      }
  
      endCol--;
      for (let i = endCol; i >= startCol; i--) {
        matrix[endRow][i] = counter;
        counter++;
      }
  
      endRow--;
      for (let i = endRow; i >= startRow; i--) {
        matrix[i][startCol] = counter;
        counter++;
      }
  
      startCol++;
    }
  
    matrix.forEach(line => console.log(line.join(' ')))
}
