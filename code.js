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
            // console.log('Rock');
            break;

        case 2:
            return 'Paper'; 
            // console.log('Paper');
            break;

        case 3:
            return 'Scissors';
            // console.log('Scissors');
            break;
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
        console.log(playersChoice);
    } else {
        console.log('Invalid choice');
        return getHumanChoice();
    }
}
// this function plays a single round of the game
// doesn't return anything yet
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Tie! You choose ${humanChoice}, but computer also choose ${computerChoice}!`);
    } else {
        switch(humanChoice) {
            case 'Rock':
                switch(computerChoice) {
                    case 'Scissors':
                        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
                        break;

                    case 'Paper':
                        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
                        break;
                }
                break;

            case 'Paper':
                switch(computerChoice) {
                    case 'Rock':
                        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
                        break;

                    case 'Scissors':
                        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
                        break;
                }
                break;

            case 'Scissors':
                switch(computerChoice) {
                    case 'Paper':
                        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
                        break;

                    case 'Rock':
                        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
                        break;
                }
                break;
        }
    }
}

// playRound( getHumanChoice(), getComputerChoice() );

