let cells = document.querySelectorAll(".gameboard__cell");
cells = Array.from(cells);

let currentPlayer = "X";

// prettier-ignore
let winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];

function checkWinner() {
  winningCombinations.forEach(function (combination) {
    let check = combination.every(
      (id) => cells[id].innerText.trim() === currentPlayer
    );
    if (check) {
      highlightCells(combination);
    }
  });
}

function highlightCells(combination) {
  combination.forEach(function (id) {
    cells[id].classList.add("highlight");
  });
}

cells.forEach(function (cell) {
  cell.addEventListener("click", function () {
    if (cell.innerText.trim() != "") return;
    cell.innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  });
});
