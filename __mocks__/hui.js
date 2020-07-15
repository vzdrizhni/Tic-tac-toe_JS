/* eslint-disable */

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

export const populateGameBoard = () => {
  for (let key in gameboard ) {
    const cellQuery = key;
    if (gameboard.hasOwnProperty(key)) {
      cellQuery = gameboard[key];
    }
  }
}

export const assignValue = (cell, value) => {
  if (gameboard[cell] === '') {
    gameboard[cell] = value;
    populateGameBoard();
  }
}

// export const makeAMove = () => {
//   for (let key in gameboard) {
//     if (gameboard.hasOwnProperty(key)) {
//       assignValue('#a1', 'O')
//     }
//   }
// }

// assignValue('#a1', 'O')