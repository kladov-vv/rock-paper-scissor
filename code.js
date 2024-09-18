console.log('Hello world!');
let computerScore = 0;
let humanScore = 0;
let roundTimer = 1;

// this function generates Computer choice
function getComputerChoice() {
    let option = ['Rock', 'Paper', 'Scissors'];
    return option[Math.floor(Math.random() * option.length)];
}

// this function asks Human for a their choice
function getHumanChoice() {
    let humanChoice = prompt('Make a choice: Rock, Paper or Scissors');
    // this part makes answer case insensitive
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    
    // this part checks if answer is valid
    if (humanChoice === 'Rock' || humanChoice === 'Paper'|| humanChoice === 'Scissors') {
        return humanChoice;
    } else {
        // this part loop until Human will choose valid option 
        console.log('Invalid choice');
        return getHumanChoice();
    }
}
// this function plays a single round of the game
function playRound(humanChoice, computerChoice) {
    // check for a tie, than check if human win or lose
    if (humanChoice === computerChoice) {
        return `Tie! Between ${computerChoice} and ${computerChoice}. 
        Score: You: ${humanScore} - Computer: ${computerScore}`;
   } else if ( (humanChoice === 'Rock' && computerChoice === 'Scissors') || 
   (humanChoice === 'Paper' && computerChoice === 'Rock') || 
   (humanChoice === 'Scissors' && computerChoice === 'Paper') ) {
        // adjust score
        humanScore = ++humanScore
        // message
        return `You win! ${humanChoice} beats ${computerChoice}! 
        Score: You: ${humanScore} - Computer: ${computerScore}`;
   } else {
        // adjust score
        computerScore = ++computerScore
        // message
        return `You lose! ${computerChoice} beats ${humanChoice}! 
        Score: You: ${humanScore} - Computer: ${computerScore}`;
   }
}

// this function plays a 5 round of the game
function playGame() {
    // this part checks for when game ends. If game still going, it loop function until game ends
    if (roundTimer < 6) {
        console.log (`Round ${roundTimer}`);
        let roundResult = playRound( getHumanChoice(), getComputerChoice() );
        console.log(roundResult)
        roundTimer = ++roundTimer;
        return playGame();
    // this game shows message with result when game ends
    } else if (humanScore === computerScore) {
        return 'Tie!';
    } else if (humanScore > computerScore) {
        return 'You win the game!';
    } else {
        return 'You lose the game!';
    };    
}

let game = playGame();
console.log(game);