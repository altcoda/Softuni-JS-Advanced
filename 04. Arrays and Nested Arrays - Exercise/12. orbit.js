function orbit(params) {

    const [rows, cols, starX, starY] = [...params].map(Number);
    let matrix = [];
    for (let i = 0; i < rows; i++) {
      matrix.push(new Array(cols))
    }
  
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        matrix[row][col] = Math.max(Math.abs(row - starX), Math.abs(col - starY)) + 1;
      }
    }
  
    matrix.forEach(line => console.log(line.join(' ')))
}
