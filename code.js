handleButtonEvents();

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
}

function handleButtonEvents() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            playRound(e.target.innerText);
        });
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