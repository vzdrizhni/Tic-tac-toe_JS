import './assets/styling/style.css';
import GameBoard from './components/gameBoard';
import Gameplay from './components/gamePlay';

function render() {
  GameBoard.populateGameBoard();
  Gameplay.applyEventListeners();
  Gameplay.makeAMove();
}

render();
