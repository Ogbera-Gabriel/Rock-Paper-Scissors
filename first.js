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
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')
    ) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return "It's a tie!";
    }
}

function cancelGame() {
    const cancel = confirm('Do you want to cancel the game?');
    if (cancel) {
        return true; 
    } else {
        alert('Game continues.');
        return false; 
    }
}

function getPlayerSelection() {
    let playerSelection;
    while (true) {
        playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
        if (playerSelection === null) {
            const cancelled = cancelGame();
            if (cancelled) {
                return null;
            } else {
                continue;
            }
        }
        playerSelection = playerSelection.toLowerCase().trim();
        if (['rock', 'paper', 'scissors'].includes(playerSelection)) {
            break;
        } else {
            alert('Invalid input. Please choose "rock", "paper", or "scissors".');
        }
    }
    return playerSelection;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let gameCancelled = false;

    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerSelection();

        if (playerSelection === null) {
            gameCancelled = true;
            break; 
        }

        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        alert(`Round ${i + 1}:\nYou chose ${playerSelection}\nComputer chose ${computerSelection}\n${result}`);

        if (result.includes('Win')) {
            playerScore++;
        } else if (result.includes('Lose')) {
            computerScore++;
        }

        console.log('Player scores:', playerScore);
        console.log('Computer scores:', computerScore);
    }

    if (gameCancelled) {
        alert('Game canceled.');
        return;
    }

    let winnerMessage;
    if (playerScore > computerScore) {
        winnerMessage = 'Congratulations! You win the game!';
    } else if (playerScore < computerScore) {
        winnerMessage = 'Sorry, you lose the game.';
    } else {
        winnerMessage = "It's a tie!";
    }

    alert(`${winnerMessage}\nFinal Scores:\nYou: ${playerScore}\nComputer: ${computerScore}`);
}

game();
