const buttons = document.querySelector('.buttons');
let computerScore = 0;
let humanScore = 0;

buttons.addEventListener('click', playGame);

function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(humanChoice, computerChoice) {
    // check for a tie, than check if human win or lose
    if (humanChoice === computerChoice) {
        return `Tie! Between ${computerChoice} and ${computerChoice}. 
        Score: You: ${humanScore} - Computer: ${computerScore}`;
   } else if ( (humanChoice === 'rock' && computerChoice === 'scissors') || 
   (humanChoice === 'paper' && computerChoice === 'rock') || 
   (humanChoice === 'scissors' && computerChoice === 'paper') ) {
        humanScore = ++humanScore
        return `You win! ${humanChoice} beats ${computerChoice}! 
        Score: You: ${humanScore} - Computer: ${computerScore}`;
   } else {
        computerScore = ++computerScore
        return `You lose! ${computerChoice} beats ${humanChoice}! 
        Score: You: ${humanScore} - Computer: ${computerScore}`;
   }
}

function playGame(event) {
    let choice = event.target.id;
    console.log(choice);
    let result = playRound(choice, getComputerChoice());
    console.log(result);
}

// let game = playGame();
// console.log(game);