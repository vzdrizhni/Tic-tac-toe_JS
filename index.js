
const gameBoard = (() => {
  let boardArr = ['X', '0', '0', 'X', '0', 'X', 'X', '0', 'X'];
  const cell = Array.from(document.querySelectorAll('.cell'));

  const render = () => {
    boardArr.forEach((item, idx) => {
      cell[idx].textContent = item;
    });
  };
  return { cell, render };
})();

gameBoard.render();

const cellObj = gameBoard;
console.log(cellObj.cell);
console.log(cellObj.render);
