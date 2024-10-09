// Global score variables
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.random(); // Generate a random number between 0 and 1

    // Determine the choice based on the random number
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
function getHumanChoice() {
    let choice = prompt("Please enter rock, paper, or scissors:").toLowerCase(); // Get the user input and convert it to lowercase
    
    // Ensure the input is one of the valid choices
    while (!['rock', 'paper', 'scissors'].includes(choice)) {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }
    
    return choice; // Return the valid user input
}

function playGame() {
    // Global score variables
    let humanScore = 0;
    let computerScore = 0;

    // Function to play a single round
    function playRound(humanChoice, computerChoice) {
        // Make humanChoice case-insensitive
        humanChoice = humanChoice.toLowerCase();

        // Check for a tie
        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${humanChoice}`);
            return;
        }

        // Determine the round winner
        if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'scissors' && computerChoice === 'paper') ||
            (humanChoice === 'paper' && computerChoice === 'rock')
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore += 1;  // Increment human score
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore += 1;  // Increment computer score
        }

        // Log the updated scores
        console.log(`Scores -> Human: ${humanScore}, Computer: ${computerScore}`);
    }

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}:`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    // Declare the overall winner
    if (humanScore > computerScore) {
        console.log(`You win the game! Final Score -> Human: ${humanScore}, Computer: ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lose the game! Final Score -> Human: ${humanScore}, Computer: ${computerScore}`);
    } else {
        console.log(`The game is a tie! Final Score -> Human: ${humanScore}, Computer: ${computerScore}`);
    }
}
playGame()

