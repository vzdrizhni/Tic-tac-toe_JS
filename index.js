const gameModule = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];
    const cells = Array.from(document.querySelectorAll('.cell'));
    const gameBoard = document.querySelector('#game-container');
    let winner = null;

    const render = () => {
        board.forEach((mark, idx) => {
          cells[idx].textContent = board[idx];
        });
      };

    const reset = () => {
      board = ['', '', '', '', '', '', '', '', ''];
    };
    
    const checkWin = () => {
        const winCombs = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
    
        winCombs.forEach((combo) => {
          if (board[combo[0]]
            && board[combo[0]] === board[combo[1]]
            && board[combo[0]] === board[combo[2]]) {
            winner = 'current';
          }
        });
        return winner || (board.includes('') ? null : 'Draw');
    };
    
    return {
      render, gameBoard, cells, board, checkWin, reset,
    };
})();