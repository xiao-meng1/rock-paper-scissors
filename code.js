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

function userPlay() {
    while (true){
        const playerSelection = prompt("Choose rock, paper, or scissors.").toLowerCase();
        if (playerSelection === "rock" || playerSelection === "paper" || 
                playerSelection === "scissors"){
            return playerSelection;
        }
        else {
            alert('Please type "rock", "paper", or "scissors"!')
        }
    }
}

function playRound() {
    const userSelection = userPlay();
    const computerSelection = computerPlay();
    let winner;
    switch (true) {
        case userSelection === "rock" && computerSelection === "rock":
            console.log("Tie! Both players chose rock");
            winner = "tie";
            break;
        case userSelection === "rock" && computerSelection === "paper":
            console.log("You lose! Paper beats rock");
            winner = "computer";
            break;
        case userSelection === "rock" && computerSelection === "scissors":
            console.log("You win! Rock beats scissors");
            winner = "user";
            break;        
        case userSelection === "paper" && computerSelection === "rock":
            console.log("You win! Paper beats rock");
            winner = "user";
            break;
        case userSelection === "paper" && computerSelection === "paper":
            console.log("Tie! You both chose paper");
            winner = "tie";
            break;
        case userSelection === "paper" && computerSelection === "scissors":
            console.log("You lose! Scissors beats paper");
            winner = "computer";
            break;
        case userSelection === "scissors" && computerSelection === "rock":
            console.log("You lose! Rock beats scissors");
            winner = "computer";
            break;
        case userSelection === "scissors" && computerSelection === "paper":
            console.log("You win! Scissors beats paper");
            winner = "user";
            break;
        case userSelection === "scissors" && computerSelection === "scissors":
            console.log("Tie! You both chose scissors");
            winner = "tie";
            break;    
    }
    return winner;
}

function game() {
    let userScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let winner = playRound();
        if (winner === "user") {
            userScore += 1;
        }
        else if (winner === "computer") {
            computerScore += 1;
        }
        if (i < 4) {
            console.log(`The current score is User: ${userScore}, Computer: ${computerScore}`);
        }
        
    }
    console.log(`Game Over! The final score is User: ${userScore}, Computer: ${computerScore}`);
}