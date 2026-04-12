function playerChoice() {
    let num = Number(prompt("Choose: Rock = 0; Paper = 1; Scissors = 2."));
    return convertValue(num)
}

function computerChoice() {
    let num = Math.floor(Math.random() * 3);
    return convertValue(num)
}

function convertValue(num) {
    if (num === 0) {
        return "rock";
    } else if (num === 1) {
        return "paper";
    } else if (num === 2) {
        return "scissors"
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

const user = playerChoice();
const opponent = computerChoice();
const gameOver = compareChoices(opponent, user);


function finalMessage() {
    console.log(`Player chooses: ${user}.`);
    console.log(`Computer chooses: ${opponent}.`);

    if (gameOver === "player") {
        console.log("You win!");
    } else if (gameOver === "computer") {
        console.log("Computer wins.");
    } else {
        console.log("Draw.")
    }
}

finalMessage();
