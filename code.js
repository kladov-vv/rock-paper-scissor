const buttons = document.querySelector('.buttons');
const score = document.querySelector('.score');
const roundResult = document.querySelector('.round-result');
// const gameResult = document.createElement('div');
let computerScore = 0;
let humanScore = 0;

buttons.addEventListener('click', playGame);

function getComputerChoice() {
    let options = ['ROCK', 'PAPER', 'SCISSORS'];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `Tie! Between ${computerChoice} and ${computerChoice}.`;
    } else if ( (humanChoice === 'ROCK' && computerChoice === 'SCISSORS') || 
    (humanChoice === 'PAPER' && computerChoice === 'ROCK') || 
    (humanChoice === 'SCISSORS' && computerChoice === 'PAPER') ) {
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

function displayRoundResult(result) {
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            message = 'You win the game!'
        } else {
            message = 'You lose the game!'
        }
        gameOver();
    } else {
        message = result;
    }
    roundResult.textContent = message;
}
    

function gameOver() {
    buttons.removeEventListener('click', playGame);
    // gameResult
}

function playGame(event) {
    let choice = event.target.id;
    choice = choice.toUpperCase();
    let result = playRound(choice, getComputerChoice());
    updateScore();
    displayRoundResult(result);
    // console.log(result);
}