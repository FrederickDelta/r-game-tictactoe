const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
const board = document.getElementById("board");
const cellElements = document.querySelectorAll("[data-cell]");
let circleTurn;

startGame();
function startGame() {
  cellElements.forEach((cell) => {
    // Only fire click event once
    cell.addEventListener("click", handleClick, { once: true });
  });

  circleTurn = true;
  setBoardHoverClass();
}

function handleClick(e) {
  // Place the mark
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  cell.classList.add(currentClass);
  // Switch turns
  circleTurn = !circleTurn;

  setBoardHoverClass();
}

function setBoardHoverClass() {
  board.classList.remove(X_CLASS);
  board.classList.remove(CIRCLE_CLASS);
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS);
  } else {
    board.classList.add(X_CLASS);
  }
}
