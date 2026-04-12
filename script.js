function getPlayerChoice() {
    return prompt("Type: Rock; Paper; Scissors.").toLowerCase();
}

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

function playFiveRounds() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 5; i > 0; i--) {
        let user = getPlayerChoice();
        let opponent = getComputerChoice();
        let result = compareChoices(opponent, user);

        console.log(`Player chooses: ${user}.`);
        console.log(`Computer chooses: ${opponent}.`);

        if (result === "player") {
            console.log("You win!");
            playerScore += 1;
        } else if (result === "computer") {
            console.log("Computer wins.");
            computerScore += 1;
        } else {
            console.log("Draw.")
        }
    }

    if (playerScore > computerScore) {
        console.log(`You win! Player Score: ${playerScore}, Computer Score: ${computerScore}.`);
    } else if (computerScore > playerScore) {
        console.log(`Computer wins. Player Score: ${playerScore}, Computer Score: ${computerScore}.`);
    } else {
        console.log(`Draw. Player Score: ${playerScore}, Computer Score: ${computerScore}.`);
    }

}

playFiveRounds();
