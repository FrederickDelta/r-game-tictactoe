const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
const cellElements = document.querySelectorAll("[data-cell]");
let circleTurn;

cellElements.forEach((cell) => {
  // Only fire click event once
  cell.addEventListener("click", handleClick, { once: true });
});

function handleClick(e) {
  // Place the mark
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  cell.classList.add(currentClass);
  // Switch turns
  circleTurn = !circleTurn;
}
