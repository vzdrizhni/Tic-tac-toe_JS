const { createPlayer } = require('./createPlayer');

const objOne = createPlayer('Nikulay', 'X');
const objTwo = createPlayer('Capos', 'O');

test('It should return create a new object with name and token', () => {
  expect(objOne.name).toBe('Nikulay');
  expect(objOne.sign).toBe('X');

  expect(objTwo.name).toBe('Capos');
  expect(objTwo.sign).toBe('O');
});
