exports.createPlayer = (nameArg, signArg) => {
  const name = nameArg;
  const sign = signArg;
  return { name, sign };
};

exports.GameBoard = (() => {
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
  // populate game board with values in gameboard array
  const populateGameBoard = () => {
    for (let key in gameboard ) {
      const cellQuery = document.querySelector(key);
      if (gameboard.hasOwnProperty(key)) {
        cellQuery.textContent = gameboard[key];
      }
    }
  };
  /* eslint-enable */

  // assign value to cell
  const assignValue = (cell, value) => {
    if (gameboard[cell] === '') {
      gameboard[cell] = value;
      populateGameBoard();
    } else {
      alert('Cannot assign a new value to a populated cell.');
      throw new Error('Cannot assign a new value to a populated cell.');
    }
  };
  const getGameBoard = () => gameboard;
  return {
    getGameBoard, assignValue, populateGameBoard,
  };
})();
