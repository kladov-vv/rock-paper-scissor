console.log('Hello world!');
let computerScore = 0;
let humanScore = 0;

// this function generates a computer choice
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

// this function asks player for a player choice
function getHumanChoice() {
    let humanChoice = prompt('Make a choice: Rock, Paper or Scissors');
    // this part makes answer case insensitive
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    // console.log(humanChoice);
    
    // this part checks if answer is valid
    if (humanChoice === 'Rock' || humanChoice === 'Paper'|| humanChoice === 'Scissors') {
        return humanChoice;
    } else {
        console.log('Invalid choice');
        return getHumanChoice();
    }
}
// this function plays a single round of the game
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `Tie! You choose ${humanChoice}, but computer also choose ${computerChoice}!`;
    } else {
        function winRound() {
            humanScore = ++humanScore
            return `You win! ${humanChoice} beats ${computerChoice}!`;
        }
        
        function loseRound() {
            computerScore = ++computerScore
            return `You lose! ${computerChoice} beats ${humanChoice}!`;
        }
        
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
    playRound( getHumanChoice(), getComputerChoice() );
    console.log('Hi!');
    // if (computerScore === 5 || humanScore === 5) {
    //     console.log('Fin');
    // } else {
    //     return playGame();
    // } 
}

