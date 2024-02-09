
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


function playRound(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toLowerCase();

    
    if (!['rock', 'paper', 'scissors'].includes(playerSelection)) {
        return 'Invalid input. Please choose "rock", "paper", or "scissors".';
    }

    
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
    } else {
        return "It's a tie!";
    }
}


function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");

        
        if (!playerSelection) return;

        let computerSelection = computerPlay();

        
        let result = playRound(playerSelection, computerSelection);
        alert('Round ' + (i + 1) + ':\n' +
              'You chose ' + playerSelection + '\n' +
              'Computer chose ' + computerSelection + '\n' +
              result);

        
        if (result.includes('Win')) {
            playerScore++;
        } else if (result.includes('Lose')) {
            computerScore++;
        }

        console.log('Player scores is ', playerScore)
        console.log('A.I scores is ', computerScore)
    }

    
    if (playerScore > computerScore) {
       alert('Congratulations! You win the game!\nFinal Scores:\nYou: ' + playerScore + '\nComputer: ' + computerScore);
    } else if (playerScore < computerScore) {
        alert('Sorry, you lose the game.\nFinal Scores:\nYou: ' + playerScore + '\nComputer: ' + computerScore);
    } else {
        alert("It's a tie!\nFinal Scores:\nYou: " + playerScore + '\nComputer: ' + computerScore);
    }
}

game();
