let computerScore = 0;
let humanScore = 0;
// let roundTimer = 1;

function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

// function getHumanChoice() {
//     let humanChoice = prompt('Make a choice: Rock, Paper or Scissors');
//     humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
        
//     if (humanChoice === 'Rock' || humanChoice === 'Paper'|| humanChoice === 'Scissors') {
//         return humanChoice;
//     } else {
//         console.log('Invalid choice');
//         return getHumanChoice();
//     }
// }

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

const buttons = document.querySelector('.buttons');
buttons.addEventListener('click', playGame)

function playGame(event) {
    let pressedButton = event.target.id;
    console.log(pressedButton);
    doSomething();
    //playRound(pressedButton, getComputerChoice);
}

function doSomething() {
    console.log('something');
}


// play 5 round of the game
// function playGame() {
//     if (roundTimer < 6) {
//         console.log (`Round ${roundTimer}`);
//         let roundResult = playRound( getHumanChoice(), getComputerChoice() );
//         console.log(roundResult)
//         roundTimer = ++roundTimer;
//         return playGame();
//     } else if (humanScore === computerScore) {
//         return 'Tie!';
//     } else if (humanScore > computerScorбe) {
//         return 'You win the game!';
//     } else {
//         return 'You lose the game!';
//     };    
// }

// let game = playGame();
// console.log(game);