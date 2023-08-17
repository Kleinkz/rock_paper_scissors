function getComputerChoice() {
    const pick = ["rock", "paper", "scissors"];
    return pick[Math.floor(Math.random() * pick.length)];
}

let message;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        message = "You tied!";
    }
    else if(playerSelection === "rock" && computerSelection === "scissors") {
        message = "You won!";
    }
    else  if(playerSelection === "paper" && computerSelection === "rock") {
        message = "You won!";
    }
    else if(playerSelection === "scissors" && computerSelection === "paper") {
        message = "You won!";
    }
    else if(playerSelection === "scissors" && computerSelection === "rock") {
        message = "You lost!";
    }
    else if(playerSelection === "rock" && computerSelection === "paper") {
        message = "You lost!";
    }
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        message = "You lost!";
    }
    return message;
}


function game() {
    let playerCount = 0;
    let computerCount = 0;
    let playerSelection = prompt("Please input your choice: ").toLowerCase();
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    if (message === "You won!") {
        playerCount += 1;
    }
    else if (message === "You lost!") {
        computerCount += 1;
    }
    else {
        playerCount += 0;
        computerCount += 0;
    }
    console.log(playRound(playerSelection, computerSelection));
    console.log(computerSelection);
     playerSelection = prompt("Please input your choice: ").toLowerCase();
     computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    if (message === "You won!") {
        playerCount += 1;
    }
    else if (message === "You lost!") {
        computerCount += 1;
    }
    else {
        playerCount += 0;
        computerCount += 0;
    }
    console.log(playRound(playerSelection, computerSelection));
    console.log(computerSelection);
     playerSelection = prompt("Please input your choice: ").toLowerCase();
     computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    if (message === "You won!") {
        playerCount += 1;
    }
    else if (message === "You lost!") {
        computerCount += 1;
    }
    else {
        playerCount += 0;
        computerCount += 0;
    }
    console.log(playRound(playerSelection, computerSelection));
    console.log(computerSelection);
     playerSelection = prompt("Please input your choice: ").toLowerCase();
     computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    if (message === "You won!") {
        playerCount += 1;
    }
    else if (message === "You lost!") {
        computerCount += 1;
    }
    else {
        playerCount += 0;
        computerCount += 0;
    }
    console.log(playRound(playerSelection, computerSelection));
    console.log(computerSelection);
     playerSelection = prompt("Please input your choice: ").toLowerCase();
     computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    if (message === "You won!") {
        playerCount += 1;
    }
    else if (message === "You lost!") {
        computerCount += 1;
    }
    else {
        playerCount += 0;
        computerCount += 0;
    }
    console.log(playRound(playerSelection, computerSelection));
    console.log(computerSelection);
    console.log (playerCount, computerCount);
    
    let announcing;
    if (playerCount > computerCount) {
        announcing = "Congratulations! You won the game against the computer!"
    }
    else if (playerCount < computerCount){
        announcing = "Tough luck! You lost the game against the computer!"
    }
    else {
        announcing = "You tied the game against the computer!"
    }
    console.log(announcing);
}

game();



