import GameBoard from '../components/gameBoard';

describe('GameBoard', () => {
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
  const updatedgameboard = {
    '#a1': 'X',
    '#a2': '',
    '#a3': '',
    '#b1': '',
    '#b2': '',
    '#b3': '',
    '#c1': '',
    '#c2': '',
    '#c3': '',
  };
  test('GameBoard returns the initial board status', () => {
    expect(GameBoard.gameboard).toEqual(gameboard);
  });

  test('GameBoard gets updated after performing a successful insert', () => {
    GameBoard.updateBoard('#a1', 'X');
    expect(GameBoard.gameboard).toEqual(updatedgameboard);
  });
});