function diagonalAttack(matrix) {

    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;
    let v = matrix.length - 1;
    for (let i = 0; i < matrix.length; i++) {
      firstDiagonalSum += matrix[i][i];
      secondDiagonalSum += matrix[i][v];
      v--;
    }
      
    return `${firstDiagonalSum} ${secondDiagonalSum}`
}
