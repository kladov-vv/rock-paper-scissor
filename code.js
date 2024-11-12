const buttons = document.querySelector('.buttons');
const score = document.querySelector('.score');
const roundResult = document.querySelector('.round-result');
const playAgain = document.createElement('button');
let computerScore = 0;
let humanScore = 0;

buttons.addEventListener('click', playGame);

playAgain.textContent = 'PLAY AGAIN';
playAgain.classList.add('button');
playAgain.setAttribute('id', 'again');

function getComputerChoice() {
    let options = ['ROCK', 'PAPER', 'SCISSORS'];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `Tie! You both choose ${humanChoice}!`;
    } else if ( (humanChoice === 'ROCK' && computerChoice === 'SCISSORS') || 
    (humanChoice === 'PAPER' && computerChoice === 'ROCK') || 
    (humanChoice === 'SCISSORS' && computerChoice === 'PAPER') ) {
        humanScore = ++humanScore
        return `You win! Your ${humanChoice} beats ${computerChoice}!`;
    } else {
        computerScore = ++computerScore
        return `You lose! Your ${humanChoice} beaten by ${computerChoice}!`;
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
    while (buttons.firstChild) {
        buttons.removeChild(buttons.lastChild);
    }
    buttons.appendChild(playAgain);
}

function playGame(event) {
    let choice = event.target.id.toUpperCase();
    if (choice === 'AGAIN') {
        location.reload();
    } else {
        let result = playRound(choice, getComputerChoice());
        updateScore();
        displayRoundResult(result);
    }
}