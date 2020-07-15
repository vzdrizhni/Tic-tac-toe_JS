import createPlayer from '../components/player';

describe('Player', () => {
  let player1;
  let player2;
  beforeEach(() => {
    player1 = createPlayer('player1', 'X');
    player2 = createPlayer('player2', 'O');
  });

  test('Checks player1 created successfully', () => {
    expect(player1.name).toBe('player1');
    expect(player1.sign).toBe('X');
  });

  test('Checks player2 created successfully', () => {
    expect(player2.name).toBe('player2');
    expect(player2.sign).toBe('O');
  });
});