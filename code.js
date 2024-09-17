console.log('Hello world!');
let computerScore = 0;
let humanScore = 0;
let roundTimer = 1;

// this function generates a Computer choice
function getComputerChoice() {
    // this part generates a random number between 1 and 3
    const minCeil = Math.ceil(1);
    const maxFloor = Math.floor(4);
    let randomNum = ( Math.floor(Math.random() * (maxFloor - minCeil) + minCeil) );

    // this switch statement returns a computer choice depending on the generated random number
    switch(randomNum) {
        case 1:
            return 'Rock';

        case 2:
            return 'Paper'; 

        case 3:
            return 'Scissors';
    }
}

// this function asks Human for a their choice
function getHumanChoice() {
    let humanChoice = prompt('Make a choice: Rock, Paper or Scissors');
    // this part makes answer case insensitive
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    // console.log(humanChoice);
    
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
   // this part checks for tie and show message about it
    if (humanChoice === computerChoice) {
        return `Tie! Between ${computerChoice} and ${computerChoice}. 
        Score: You: ${humanScore} - Computer: ${computerScore}`;
    } else {
        // this function called if Human win round
        function winRound() {
            // adjust score
            humanScore = ++humanScore
            // message
            return `You win! ${humanChoice} beats ${computerChoice}! 
            Score: You: ${humanScore} - Computer: ${computerScore}`;
        }
        // this function called if Human lose round
        function loseRound() {
            // adjust score
            computerScore = ++computerScore
            // message
            return `You lose! ${computerChoice} beats ${humanChoice}! 
            Score: You: ${humanScore} - Computer: ${computerScore}`;
        }
        // this switch statement calls winRound() or loseRound() depending on Human and Computer choices
        switch(humanChoice) {
            case 'Rock':
                switch(computerChoice) {
                    case 'Scissors':
                        return winRound();

                    case 'Paper':
                        return loseRound();
                }

            case 'Paper':
                switch(computerChoice) {
                    case 'Rock':
                        return winRound();

                    case 'Scissors':
                        return loseRound();
                }

            case 'Scissors':
                switch(computerChoice) {
                    case 'Paper':
                        return winRound();

                    case 'Rock':
                        return loseRound();
                }
        }
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