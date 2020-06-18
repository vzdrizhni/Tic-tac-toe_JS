const gameBoard = (() => {
  let boardArr = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'];
  const cells = Array.from(document.querySelectorAll('.cell'));
  let winner = null;

  const render = () => {
    boardArr.forEach((item, idx) => {
      cells[idx].textContent = item;
    });
  };

  const reset = () => {
    boardArr = ['', '', '', '', '', '', '', '', ''];
  };

  const winComb = () => {
    const winArr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winArr.forEach((arr) => {
      if (boardArr[arr[0]]
         && boardArr[arr[0]] === boardArr[arr[1]]
         && boardArr[arr[0]] === boardArr[arr[2]]) {
        winner = 'current';
      }
    });
    return winner || (boardArray.includes('') ? null : 'Tie');
};

  return { cells, render, winComb };
})();

gameBoard.render();

const Player = (name, token) => {

    const playTurn = (board, cell) => {
        const idx = board.cells.findIndex(position => position === cell); // index of the first matching    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']
        if (board.boardArray[idx] === '') {
          board.render();
          return idx;
        }
        return null;
      };

    return { name, token, playTurn };
}

const gamePlay = (() => {
  const playerOneName = document.querySelector('#player1');
  const playerTwoName = document.querySelector('#player2');
  const form = document.querySelector('.player-info');
  const resetBtn = document.querySelector('#reset');
  let currentPlayer;
  let playerOne;
  let playerTwo;

  const switchTurn = () => {
    currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
  };

})();

// const hui = Player("pidr", 'X');
// console.log(hui);
// gameBoard.render();
// console.log(gameBoard.cells.innerHTML)
// hui.playTurn(gameBoard, '');
// console.log()

// const cellObj = gameBoard;
// console.log(cellObj.winComb());

// function (playerName, token) {
//   if(playerName === playerOneName) {
//     token = "X";
//   } else {
//     token = "0";
//   }
// }

