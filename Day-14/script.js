let correctNumber = 5;   // fixed number for simplicity
let gameOver = false;

function playGame() {

    // while loop for continuous gameplay
    while (!gameOver) {

        // String to Number conversion
        let userGuess = Number(document.getElementById("userInput").value);

        // if / else state checking
        if (userGuess === correctNumber) {
            document.getElementById("result").innerText = "🎉 Correct! You won!";
            gameOver = true;
        } 
        else if (userGuess < correctNumber) {
            document.getElementById("result").innerText = "Too low! Try again.";
            break;
        } 
        else {
            document.getElementById("result").innerText = "Too high! Try again.";
            break;
        }
    }
}
