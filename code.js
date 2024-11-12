const buttons = document.querySelector('.buttons');
const score = document.querySelector('.score');
const roundResult = document.querySelector('.round-result');
const gameResult = document.createElement('div');
let computerScore = 0;
let humanScore = 0;

buttons.addEventListener('click', playGame);

function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `Tie! Between ${computerChoice} and ${computerChoice}.`;
    } else if ( (humanChoice === 'rock' && computerChoice === 'scissors') || 
    (humanChoice === 'paper' && computerChoice === 'rock') || 
    (humanChoice === 'scissors' && computerChoice === 'paper') ) {
        humanScore = ++humanScore
        return `You win! ${humanChoice} beats ${computerChoice}!`;
    } else {
        computerScore = ++computerScore
        return `You lose! ${computerChoice} beats ${humanChoice}!`;
    }
}

function updateScore() {
    score.textContent = `You: ${humanScore} | Computer: ${computerScore}`
}

function displayResult(result) {
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            message = 'You win the game!'
        } else {
            message = 'You lose the game!'
        }
        endGame();
    } else {
        message = result;
    }
    roundResult.textContent = message;
}
    

function endGame() {
    // gameResult
}

function playGame(event) {
    let choice = event.target.id;
    let result = playRound(choice, getComputerChoice());
    updateScore();
    displayResult(result);
    // console.log(result);
}