function ticTacToe(moves) {
    const playerOne = 'X';
    const playerTwo = 'O';
   
    let turn = playerOne;
    let winner = false;
    let boardFull = false;
    let board = [];
    let cells = 3;
    let numOfTurns = 0;
   
    // Create NxN board of cells size with initial values false
    for (let row = 0; row < cells; row++) {
      board[row] = new Array(cells).fill(false);
    }
   
    // Functions to check for winner or full board
    const checkForWinner = {
      rows: () => {
        // Check for each row if all cells are the same
        // Check if all cells have been played
        let fullRows = 0;
        for(let row of board) {
          if (row.every(symbol => symbol !== false)) {
            fullRows++;
            if (row.every(symbol => symbol == turn)) {
              winner = turn;
            }
          }
        }
        if (fullRows === cells) { boardFull = true; }
      },
      cols: () => {
        // Check for each column if all cells are the same
        for (let i = 0; i < cells; i++) {
          let turns = new Set();
          for (let n = 0; n < cells; n++) {
            turns.add(board[n][i])
          }
          if (turns.size === 1 && turns.has(turn)) { winner = turn; }
        }
      },
      diagonals: () => {
        let firstDiagonalTurns = new Set(), secondDiagonalTurns = new Set();
        let secondDiagonalPos = board.length - 1;
   
        // Add the diagonal turns so far to unique sets
        for (let i = 0; i < cells; i++) {
          firstDiagonalTurns.add(board[i][i])
          secondDiagonalTurns.add(board[i][secondDiagonalPos]);
          secondDiagonalPos--;
        }
        
        // If all cells of any diagonal are the same and not false current player wins
        const firstDiagonalWin = firstDiagonalTurns.size === 1 && firstDiagonalTurns.has(turn);
        const secondDiagonalWin = secondDiagonalTurns.size === 1 && secondDiagonalTurns.has(turn);
        if (firstDiagonalWin || secondDiagonalWin){ winner = turn; }
      }
    }
    
      // Perform moves on the board
    for (let move = 0; move < moves.length; move++) {
      const [row, col] = moves[move].split(' ').map(Number);
      const isValid = board[row] != undefined && board[row][col] != undefined;
   
      // If cell is taken we skip the rest and the player picks another cell
      if (isValid && board[row][col] !== false) {
        console.log(`This place is already taken. Please choose another!`);
        continue;
      }
   
      // Apply turn if it's valid else skip the rest and the player picks another cell
      if(isValid) { board[row][col] = turn; numOfTurns++; }
      else { continue; }
      // Perform checks for winner or full board if the minimum turns for winning are reached
      if(numOfTurns >= 5) {
        for (let check in checkForWinner) {
          checkForWinner[check]();
        }
      }
      
      if (winner) {
        console.log(`Player ${turn} wins!`);
        break;
      } else if (boardFull) {
        console.log(`The game ended! Nobody wins :(`);
        break;
      }
   
      // Switch turn
      if (turn === playerOne) { turn = playerTwo }
      else { turn = playerOne }
    }
   
    // Print game board
    for (let row in board) {
      console.log(board[row].join('\t'))
    }
}
