// Player factory function
function createPlayer(nameArg, signArg) {
  const name = nameArg;
  const sign = signArg;
  return { name, sign };
}


// GameBoard module
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
      throw new Error('Cannot assign a new value to a populated cell.');
    }
  };
  const getGameBoard = () => gameboard;
  return {
    getGameBoard, assignValue, populateGameBoard,
  };
})();

// Gameplay Module
const Gameplay = (() => {
  let gameActive = false;
  let turn = true;
  const gb = GameBoard.getGameBoard();
  const resetBtn = document.querySelector('#reset');
  const player1 = createPlayer('Player 1', 'O');
  const player2 = createPlayer('Player 2', 'X');
  const winComb = () => {
    // possible win scenarios
    // a1, a2, a3 is same or a3, b3, c3 is same or a1, b1, c1 is same, or
    // a2, b2, c2 is same, c1, c2, c3 is same
    // or a1, b2, c3 is same or a3, b2, c1 is same
    // or b1, b2, b3 is same
    const a1 = gb['#a1'];
    const b1 = gb['#b1'];
    const a3 = gb['#a3'];
    const c2 = gb['#c2'];
    if (a1 !== '') {
      if ((a1 === gb['#a2'] && a1 === gb['#a3']) || (a1 === gb['#b1'] && a1 === gb['#c1']) || (a1 === gb['#b2'] && a1 === gb['#c3'])) {
        return a1;
      }
    }

    if (a3 !== '') {
      if ((a3 === gb['#b3'] && a3 === gb['#c3']) || (a3 === gb['#b2'] && a3 === gb['#c1'])) {
        return a3;
      }
    }

    if (b1 !== '') {
      if (b1 === gb['#b2'] && b1 === gb['#b3']) {
        return b1;
      }
    }

    if (c2 !== '') {
      if ((c2 === gb['#a2'] && c2 === gb['#b2']) || (c2 === gb['#c1'] && c2 === gb['#c3'])) {
        return c2;
      }
    }

    if (gb['#a1'] !== '' && gb['#a2'] !== '' && gb['#a3'] !== '' && gb['#b1'] !== '' && gb['#b2'] !== '' && gb['#b3'] !== '' && gb['#c1'] !== '' && gb['#c3'] !== '') {
      return 'TIE';
    }
    return false;
  };

  const printWinner = winnerName => {
    if (winnerName === 'TIE') {
      document.getElementById('game-message').innerText = "It's a TIE! 👻";
      return;
    }
    document.getElementById('game-message').innerText = `${winnerName} won! 🎉`;
  };

  const checkForWinner = () => {
    const winningSign = winComb();
    if (winningSign) {
      gameActive = false;
      if (winningSign === 'O') {
        printWinner(player1.name);
      } else if (winningSign === 'X') {
        printWinner(player2.name);
      } else if (winningSign === 'TIE') {
        printWinner('TIE');
      }
      resetBtn.style.display = 'block';
    }
  };

  const hideButtons = () => {
    const gameContainer = document.querySelector('.game-container');
    const gameplayCont = document.querySelector('.gameplay-container');
    gameplayCont.style.display = 'flex';
    const buttons = document.querySelector('.buttons');
    gameContainer.removeChild(buttons);
  };

  const changePlayersNames = () => {
    const p1Name = document.querySelector('#plr1').value;
    const p2Name = document.querySelector('#plr2').value;
    if (p1Name !== '') player1.name = p1Name;
    if (p2Name !== '') player2.name = p2Name;
  };

  const initializeGame = () => {
    if (!gameActive) {
      changePlayersNames();
      hideButtons();
      gameActive = true;
      document.getElementById('game-message').innerText = `${player1.name}'s Turn!'`;
    } else {
      throw new Error('Game already started.');
    }
  };

  const applyEventListeners = () => {
    const startBtn = document.querySelector('#startBtn');
    startBtn.addEventListener('click', () => initializeGame());
  };

  /* eslint-disable */
  const makeAMove = () => {
    for (let key in gb) {
      const cellQuery = document.querySelector(key);
      if (gb.hasOwnProperty(key)) {
        cellQuery.addEventListener('click', (e) => {
          if (gameActive) {
            if (turn) {
              GameBoard.assignValue(key, 'O')
              document.getElementById('game-message').innerText = `${player2.name}'s Turn!'`
              checkForWinner();
              turn = !turn;
            } else {
              GameBoard.assignValue(key, 'X');
              document.getElementById('game-message').innerText = `${player1.name}'s Turn!'`
              checkForWinner();
              turn = !turn;
            }
          }
        });
      }
    }
  };

  resetBtn.addEventListener('click', () => {
    document.querySelector('#game-message').textContent = 'Tic Tac Toe';
    window.location.reload();
  });

  return {
    applyEventListeners, makeAMove,
  };
})();
  /* eslint-enable */

function render() {
  GameBoard.populateGameBoard();
  Gameplay.applyEventListeners();
  Gameplay.makeAMove();
}

render();
