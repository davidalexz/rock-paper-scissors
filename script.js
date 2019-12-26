function computerPlay() {
    const selection = ['Rock', 'Paper' , 'Scissors'];
    return selection[Math.floor(Math.random() * Math.floor(3))];
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock') {
        if (computerSelection === 'Scissors') {
            console.log('User Wins');
        } else if (computerSelection === 'Paper') {
            console.log('Computer Wins');
        } else {
            console.log('Equal, go again');
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            console.log('User Wins') ;
        } else if (computerSelection = 'Scissors') {
            console.log('Computer Wins');
        } else {
            console.log('Equal, go again')
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Paper') {
            console.log('User Wins')
        } else if (computerSelection === 'Rock') {
            console.log('Computer Wins');
        } else {
            console.log('Equal, go again');
        }
    }
};


const playerSelection = 'Rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))
