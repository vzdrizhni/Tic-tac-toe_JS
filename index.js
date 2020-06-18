const gameBoard = (() => {
  let boardArr = ['X', '0', '0', 'X', '0', 'X', 'X', '0', 'X'];
  const cell = Array.from(document.querySelectorAll('.cell'));
  let winner = null;

  const render = () => {
    boardArr.forEach((item, idx) => {
      cell[idx].textContent = item;
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

  return { cell, render, winComb };
})();

gameBoard.render();

// const cellObj = gameBoard;
// console.log(cellObj.winComb());

// function (playerName, token) {
//   if(playerName === playerOneName) {
//     token = "X";
//   } else {
//     token = "0";
//   }
// }
