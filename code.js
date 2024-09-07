console.log('Hello world!');


// this function generates computer choice in the game
function getComputerChoice() {
    // this part generates random number between 1 and 3
    const minCeil = Math.ceil(1);
    const maxFloor = Math.floor(4);
    let randomNum = ( Math.floor(Math.random() * (maxFloor - minCeil) + minCeil) );

    // this switch statement returns a computer choice depending on the generated number
    switch(randomNum) {
        case 1:
            return 'rock'; 
            console.log('rock')
        break;

        case 2:
            return 'paper'; 
            console.log('paper')
        break;

        case 3:
            return 'scissors';
            console.log('scissors') 
        break;
    }
}
