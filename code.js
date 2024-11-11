const buttons = document.querySelector('.buttons');
const score = document.querySelector('.score');
const roundResult = document.querySelector('.round-result');
let computerScore = 0;
let humanScore = 0;

buttons.addEventListener('click', playGame);

score.textContent = `You: ${humanScore} | Computer: ${computerScore}`

function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

function updateScore() {
    score.textContent = `You: ${humanScore} | Computer: ${computerScore}`
}

function playRound(humanChoice, computerChoice) {
    // check for a tie, than check if human win or lose
    if (humanChoice === computerChoice) {
        return `Tie! Between ${computerChoice} and ${computerChoice}.`;
        // TIE
   } else if ( (humanChoice === 'rock' && computerChoice === 'scissors') || 
   (humanChoice === 'paper' && computerChoice === 'rock') || 
   (humanChoice === 'scissors' && computerChoice === 'paper') ) {
        humanScore = ++humanScore
        return `You win! ${humanChoice} beats ${computerChoice}!`;
        // HUMAN WIN
   } else {
        computerScore = ++computerScore
        return `You lose! ${computerChoice} beats ${humanChoice}!`;
        // HUMAN LOSE
   }
}

function playGame(event) {
    let choice = event.target.id;
    console.log(choice);
    let result = playRound(choice, getComputerChoice());
    updateScore();
    console.log(result);
}