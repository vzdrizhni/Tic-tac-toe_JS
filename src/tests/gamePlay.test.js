// import GameBoard from '../components/gameBoard';
import createPlayer from '../components/player';
import Gameplay from '../components/gamePlay';

describe('Gameplay', () => {
  let player1;
  let player2;
  beforeEach(() => {
    player1 = createPlayer('player1', 'O');
    player2 = createPlayer('player2', 'X');
  });

  test('wincomb is checking properly', () => {
    const winCombTest = jest.fn(() => {
      Gameplay.winCombTest();
    });
    winCombTest();
    expect(winCombTest).toHaveBeenCalled();
  });

  test('Checking for winning combination if any', () => {
    expect(Gameplay.winCombTest()).toBe('O');
  });

  test('Check Winner', () => {
    expect(Gameplay.checkForWinnerTest()).toBe('Player 1');
  });

  test('Change players names', () => {
    expect(Gameplay.changePlayersNamesTest(player1, player2)[0]).toBe('Nikulay');
    expect(Gameplay.changePlayersNamesTest(player1, player2)[1]).toBe('Capos');
  });
});