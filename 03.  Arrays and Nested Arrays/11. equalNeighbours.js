function equalNeighbours(matrix) {

    let equals = 0;
    for (let i = 0; i < matrix.length; i++) {
  
      for (let j = 0; j < matrix[i].length; j++) {
        let col = matrix[i][j];
        if (col === matrix[i][j + 1]) { equals++ }
        if (i !== matrix.length - 1 && col === matrix[i + 1][j]) { equals++ }
      }
    }
  
    return equals;
}
