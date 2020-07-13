const { GameBoard } = require('./createPlayer');

const gameboard = GameBoard.getGameBoard();

const filledBoard = {
  '#a1': '',
  '#a2': 'O',
  '#a3': 'X',
  '#b1': '',
  '#b2': 'O',
  '#b3': 'X',
  '#c1': '',
  '#c2': 'O',
  '#c3': '',
};

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

test('', ()=> {
  expect
})

describe('assignValue function', () => {
  // GameBoard.assignValue('#a1', '');
  GameBoard.assignValue('#a2', 'O');
  // GameBoard.assignValue('#a3','X');
  // GameBoard.assignValue('#b1', '');
  // GameBoard.assignValue('#b2', 'O');
  // GameBoard.assignValue('#b3', 'X');
  // GameBoard.assignValue('#c1', '');
  // GameBoard.assignValue('#c2', 'O');
  // GameBoard.assignValue('#c3', '');

  test('gameboard should be equal to fillboar', () => {
    expect(filledBoard).toEqual(gameboard);
  })
})
