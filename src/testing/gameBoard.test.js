const { GameBoard } = require('./createPlayer');

const gameboard = GameBoard.getGameBoard();

test('it should be equal to empty board', () => {
  expect(gameboard).toEqual(
    {
      '#a1': '',
      '#a2': '',
      '#a3': '',
      '#b1': '',
      '#b2': '',
      '#b3': '',
      '#c1': '',
      '#c2': '',
      '#c3': '',
    },
  );
});
