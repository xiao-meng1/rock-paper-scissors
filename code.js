addButtonEvents();

function computerPlay() {
    const randomNumber = Math.floor(Math.random()*3)+1;
    if (randomNumber ===1){
        return "rock";
    }
    else if (randomNumber === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(userSelection) {
    userSelection = userSelection.toLowerCase();
    const computerSelection = computerPlay();
    let winner;
    switch (true) {
        case userSelection === "rock" && computerSelection === "rock":
            winner = "tie";
            break;
        case userSelection === "rock" && computerSelection === "paper":
            winner = "computer";
            break;
        case userSelection === "rock" && computerSelection === "scissors":
            winner = "user";
            break;        
        case userSelection === "paper" && computerSelection === "rock":
            winner = "user";
            break;
        case userSelection === "paper" && computerSelection === "paper":
            winner = "tie";
            break;
        case userSelection === "paper" && computerSelection === "scissors":
            winner = "computer";
            break;
        case userSelection === "scissors" && computerSelection === "rock":
            winner = "computer";
            break;
        case userSelection === "scissors" && computerSelection === "paper":
            winner = "user";
            break;
        case userSelection === "scissors" && computerSelection === "scissors":
            winner = "tie";
            break;    
    }
    displayResult(winner, userSelection, computerSelection);
    changeScore(winner);
    checkEndGame();
}

function addButtonEvents() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", buttonHandler)
    });
}

function buttonHandler(e) {
    playRound(e.target.innerText);
}

function removeButtonEvents() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.removeEventListener("click", buttonHandler)
    });
}

function displayResult(winner, userSelection, computerSelection) {
    let resultMessage;
    if (winner === "tie") {
        resultMessage = `Tie, Both players chose ${userSelection}!`;
    }
    else if (winner === "user") {
        resultMessage = `You win, ${userSelection} beats ${computerSelection}!`;
    }
    else {
        resultMessage = `You lose, ${computerSelection} beats ${userSelection}!`;
    }
    const result = document.querySelector("#result");
    result.textContent = resultMessage;
}

function changeScore(winner) {
    const userScore = document.querySelector("#user-score");
    const computerScore = document.querySelector("#computer-score");
    if (winner === "user") {
        userScore.textContent = Number(userScore.textContent)+1;
    }
    else if (winner === "computer") {
        computerScore.textContent = Number(userScore.textContent)+1;
    }
}

function checkEndGame() {
    const userScore = document.querySelector("#user-score");
    const computerScore = document.querySelector("#computer-score");
    if (Number(userScore.textContent) === 5 || Number(computerScore.textContent) === 5){
        endGame(winner);
    }
}

function endGame(winner) {
    const winnerDisplay = document.querySelector("#winner");
    winnerDisplay.textContent = `Game Over! The winner is the ${winner}!`;
    removeButtonEvents();
}