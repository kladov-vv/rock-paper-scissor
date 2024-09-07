console.log('Hello world!');
let computerScore = 0;
let humanScore = 0;

// this function generates random computer's choice for the game
function getComputerChoice() {
    // this part generates random number between 1 and 3
    const minCeil = Math.ceil(1);
    const maxFloor = Math.floor(4);
    let randomNum = ( Math.floor(Math.random() * (maxFloor - minCeil) + minCeil) );

    // this switch statement returns a computer's choice depending on the generated earlier number
    switch(randomNum) {
        case 1:
            return 'rock';
            // console.log('rock')
        break;

        case 2:
            return 'paper'; 
            // console.log('paper')
        break;

        case 3:
            return 'scissors';
            // console.log('scissors') 
        break;
    }
}

// this function asks player for a choice
function getHumanChoice() {
    let playersChoice = prompt('Make a choice: rock, paper or scissors');

    if (playersChoice === 'rock' || playersChoice === 'paper'|| playersChoice === 'scissors') {
        return playersChoice;
        console.log(playersChoice);
    } else {
        console.log('Invalid choice');
        // returns 'undefined'
    }
}