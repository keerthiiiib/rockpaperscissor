let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let result = "";

    if (humanChoice === computerChoice) {
        result = `It's a tie! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        result = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        result = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    document.getElementById("result").textContent = result;
    updateScore();
}

function updateScore() {
    document.getElementById("result").textContent += ` Scores: You - ${humanScore}, Computer - ${computerScore}`;
    if (humanScore === 5) {
        document.getElementById("result").textContent += " You won the game!";
        resetGame();
    } else if (computerScore === 5) {
        document.getElementById("result").textContent += " Computer won the game!";
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    setTimeout(() => {
        document.getElementById("result").textContent = "Choose your move!";
    }, 3000);
}

document.getElementById("rock").addEventListener("click", () => playRound("rock", getComputerChoice()));
document.getElementById("paper").addEventListener("click", () => playRound("paper", getComputerChoice()));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors", getComputerChoice()));
