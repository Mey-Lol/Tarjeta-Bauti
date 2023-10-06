const puzzlePieces = ["B", "A", "U", "T", "I", "8", "🎉"];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function createPuzzle() {
  const puzzleContainer = document.getElementById("puzzleContainer");
  shuffle(puzzlePieces);
  puzzlePieces.forEach((piece, index) => {
    const puzzlePiece = document.createElement("div");
    puzzlePiece.classList.add("puzzle-piece");
    puzzlePiece.textContent = piece;
    puzzleContainer.appendChild(puzzlePiece);
  });
}

window.onload = () => {
  createPuzzle();
};
