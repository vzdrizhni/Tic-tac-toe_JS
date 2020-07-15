const GameBoard = (() => {
  const gameboard = {
    '#a1': '',
    '#a2': '',
    '#a3': '',
    '#b1': '',
    '#b2': '',
    '#b3': '',
    '#c1': '',
    '#c2': '',
    '#c3': '',
  };
  /* eslint-disable */
  const populateGameBoard = () => {
    for (let key in gameboard ) {
      const cellQuery = document.querySelector(key);
      if (gameboard.hasOwnProperty(key)) {
        cellQuery.textContent = gameboard[key];
      }
    }
  };
  /* eslint-enable */

  const updateBoard = (cell, value) => {
    gameboard[cell] = value;
  };

  const assignValue = (cell, value) => {
    if (gameboard[cell] === '') {
      updateBoard(cell, value);
      populateGameBoard();
    } else {
      alert('Cannot assign a new value to a populated cell.'); //eslint-disable-line
      throw new Error('Cannot assign a new value to a populated cell.');
    }
  };
  const getGameBoard = () => gameboard;
  return {
    getGameBoard,
    assignValue,
    populateGameBoard,
    gameboard,
    updateBoard,
  };
})();

export default GameBoard;