function diagonalAttack(matrix) {

  // Convert matrix elements to numbers
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = matrix[i].split(' ').map(Number);
  }

  // Sum two main diagonals of matrix
  let firstDiagonalSum = 0, secondDiagonalSum = 0;
  let secondDiagonalPos = matrix.length - 1;
  for (let i = 0; i < matrix.length; i++) {
    firstDiagonalSum += matrix[i][i];
    secondDiagonalSum += matrix[i][secondDiagonalPos];
    secondDiagonalPos--;
  }

  // If sums are equal change all other numbers in matrix to first sum
  if (firstDiagonalSum == secondDiagonalSum) {
    secondDiagonalPos = matrix.length - 1;
    for (let i = 0; i < matrix.length; i++) {
      matrix[i].map((num, index) => {
        // If the numbers aren't part of the diagonals change them
        if (index !== i && index !== secondDiagonalPos) {
          matrix[i][index] = firstDiagonalSum;
        }
      })
      secondDiagonalPos--;
    }
  }

  matrix.forEach(line => console.log(line.join(' ')));
}
