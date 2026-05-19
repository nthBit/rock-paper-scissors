function getComputerChoice() {
    return convertValue(Math.floor(Math.random() * 3));
}

function convertValue(num) {
    switch (num) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
        default: return "unknown";
    }
}

function compareChoices(computer, player) {
    if (computer === "paper" && player === "rock") {
        return "computer";
    } else if (computer === "scissors" && player === "paper") {
        return "computer";
    } else if (computer === "rock" && player === "scissors") {
        return "computer";
    } else if (computer === player) {
        return "draw";
    } else {
        return "player";
    }
}

function playRound(userChoice) {
    const user = userChoice;
    const opponent = getComputerChoice();
    const result = compareChoices(opponent, user);
    return result;
}

function displayResult(gameResult) {
    const div = document.createElement('div');
    if (gameResult === 'draw') {
        div.textContent = `The game is a ${gameResult}.`;
    } else {
        div.textContent = `The winner is ${gameResult}!`;
    }
    body.appendChild(div);
}

const body = document.querySelector('body');
const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');

rock.textContent = 'Rock';
paper.textContent = 'Paper';
scissors.textContent = 'Scissors';

body.appendChild(rock);
body.appendChild(paper);
body.appendChild(scissors);

rock.addEventListener('click', () => {
    const playerChoice = 'rock';
    const result = playRound(playerChoice);
    displayResult(result);
});
paper.addEventListener('click', () => {
    const playerChoice = 'paper';
    const result = playRound(playerChoice);
    displayResult(result);
});
scissors.addEventListener('click', () => {
    const playerChoice = 'scissors';
    const result = playRound(playerChoice);
    displayResult(result);
});
