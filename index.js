const gameBoard = (() => {
  let boardArr = ['', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'];
  const gameTable = document.querySelector('#board');
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
    return winner || (boardArr.includes('') ? null : 'Draw');
};

  return {
    render, gameTable, cells, boardArr, winComb, reset,
  };
})();

gameBoard.render();

const Player = (name, token) => {
  const playTurn = (board, cell) => {
    const idx = board.cells.findIndex(position => position === cell); // index of the first matching    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']
    if (board.boardArr[idx] === '') {
      board.render();
      return idx;
    }
    return null;
  };
  return { name, token, playTurn };
};

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

  const gameRound = () => {
    const board = gameBoard;
    const gameStatus = document.querySelector('.game-status');

    if (currentPlayer.name !== '') {
      gameStatus.textContent = `${currentPlayer.name}'s Turn`;
    } else {
      gameStatus.textContent = 'Board: ';
    }

    board.gameTable.addEventListener('click', (event) => {
      event.preventDefault();
      const play = currentPlayer.playTurn(board, event.target);
      if (play !== null) {
        board.boardArr[play] = `${currentPlayer.token}`;
        board.render();
        const winStatus = board.winComb();
        if (winStatus === 'Draw') {
          gameStatus.textContent = 'Draw!';
        } else if (winStatus === null) {
          switchTurn();
          gameStatus.textContent = `${currentPlayer.name}'s Turn`;
        } else {
          gameStatus.textContent = `Winner is ${currentPlayer.name}`;
          board.reset();
          board.render();
        }
      }
    });
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
