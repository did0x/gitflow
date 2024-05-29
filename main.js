const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Choices array
const choices = ['rock', 'paper', 'scissors'];

// Function to get computer's choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'It\'s a tie!';
    }
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

// Function to play the game
function playGame() {
    rl.question('Enter your choice (rock, paper, or scissors): ', (answer) => {
        const playerChoice = answer.toLowerCase();

        if (!choices.includes(playerChoice)) {
            console.log('Invalid choice, please choose rock, paper, or scissors.');
            playGame(); // Restart the game if the input is invalid
        } else {
            const computerChoice = getComputerChoice();
            console.log(`You chose: ${playerChoice}`);
            console.log(`Computer chose: ${computerChoice}`);
            const result = determineWinner(playerChoice, computerChoice);
            console.log(result);

            rl.question('Do you want to play again? (yes/no): ', (playAgain) => {
                if (playAgain.toLowerCase() === 'yes') {
                    playGame();
                } else {
                    console.log('Thanks for playing!');
                    rl.close();
                }
            });
        }
    });
}

// Start the game
playGame();