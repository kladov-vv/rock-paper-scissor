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
            return 'rock';
            // console.log('Rock');
            break;

        case 2:
            return 'paper'; 
            // console.log('Paper');
            break;

        case 3:
            return 'scissors';
            // console.log('Scissors');
            break;
    }
}

// this function asks player for a player choice
function getHumanChoice() {
    let humanChoice = prompt('Make a choice: Rock, Paper or Scissors');
    // this part makes answer case insensitive
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    console.log(humanChoice);
    
    if (humanChoice === 'Rock' || humanChoice === 'Paper'|| humanChoice === 'Scissors') {
        return humanChoice;
        console.log(playersChoice);
    } else {
        console.log('Invalid choice');
        return getHumanChoice();
    }
}

// function playRound(humanChoice, computerChoice) {
// //human Choice parameter should be case-insensitive
//     switch (humanChoice) {
//         case 'rock':
//             switch (computerChoice) {
//                 case 'scissors':
//                     console.log('You win! Rock beats Scissors')
//                 break;

//                 case 'rock':
//                     console.log('Tie')
//                 break;

//                 case 'paper':
//                     console.log('You lose! Paper beats Rock')
//                 break;
//             }
//         break;

        
//     }

// }
// playRound( getHumanChoice(), getComputerChoice() );

