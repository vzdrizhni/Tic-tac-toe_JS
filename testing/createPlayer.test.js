import createPlayer from './jestIndex';
import * as assets from '../__mocks__/hui';


const objOne = createPlayer('Nikulay', 'X');
const objTwo = createPlayer('Capos', 'O');

test('It should return create a new object with name and token', () => {
  expect(objOne.name).toBe('Nikulay');
  expect(objOne.sign).toBe('X');

  expect(objTwo.name).toBe('Capos');
  expect(objTwo.sign).toBe('O');
});

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
describe('Mock Test', () => {
  test('assignValue', () => {
    const populateGameBoard = jest.fn(() => {
      for (let key in gameboard ) {
        const cellQuery = key;
        if (gameboard.hasOwnProperty(key)) {
          cellQuery = gameboard[key];
        }
      }
    })
    const assignValue = jest.fn((cell, value) => {
      if (gameboard[cell] === '') {
        gameboard[cell] = value;
        populateGameBoard();
      }
    });
    assignValue('#a1', 'O');

    // const makeAMove = jest.fn(() => {
    //   for (let key in gameboard) {
    //     if (gameboard.hasOwnProperty(key)) {
    //       assignValue('#a1', 'O')
    //     }
    //   }
    // });
    // makeAMove()
    expect(gameboard['#a1']).toBe('O');
    expect(assignValue).toHaveBeenCalled();
    expect(populateGameBoard).toHaveBeenCalled();
  });
});