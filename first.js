function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return 'You Win! ' + playerSelection + ' beats ' + computerSelection;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')
    ) {
        return 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'rock') ||
        (playerSelection === 'paper' && computerSelection === 'paper') ||
        (playerSelection === 'scissors' && computerSelection === 'scissors')
    ) {
        return 'It\'s a tie!';
    }
    else {
        return'not picking one of three chocess(You did lost point )';
    }
}
function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
        let computerSelection = computerPlay();
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();

        alert('Round ' + (i + 1) + ':');
        alert('You chose ' + playerSelection);
        alert('Computer chose ' + computerSelection);
        let result = playRound(playerSelection, computerSelection);
        alert(result);
        if (result.includes('Win')) {
            playerScore++;
        } else if (result.includes('Lose')) {
            computerScore++;
        }

        console.log('Player scores is ', playerScore)
        console.log('A.I scores is ', computerScore)
    }

    
    
    if (playerScore > computerScore) {
       alert('Congratulations! You win the game!');
    } else if (playerScore < computerScore) {
        alert('Sorry, you lose the game.');
    } else {
        alert('It\'s a tie!');
    }

    
}


