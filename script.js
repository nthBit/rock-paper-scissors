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
        return"computer";
    } else if (computer === "rock" && player === "scissors") {
        return "computer";
    } else if (computer === player) {
        return "draw";
    } else {
        return "player";
    }
}

function startGame() {

    const user = getPlayerChoice();
    const opponent = getComputerChoice();
    const result = compareChoices(opponent, user);

    console.log(`Player chooses: ${user}.`);
    console.log(`Computer chooses: ${opponent}.`);

    if (result === "player") {
        console.log("You win!");
    } else if (result === "computer") {
        console.log("Computer wins.");
    } else {
        console.log("Draw.")
    }
}

startGame();
