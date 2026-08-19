const cells = document.querySelectorAll(".cell");
const restartBtn = document.querySelector("button");

let currentPlayer = "X";

cells.forEach(cell => {
    cell.addEventListener("click", () => {

        if (cell.textContent !== "") {
            return;
        }

        cell.textContent = currentPlayer;

        currentPlayer = currentPlayer === "X" ? "O" : "X";
    });
});

// Restart Game
restartBtn.addEventListener("click", () => {

    cells.forEach(cell => {
        cell.textContent = "";
    });

    currentPlayer = "X";

});