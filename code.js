function computerPlay() {
    const random_number = Math.floor(Math.random()*3)+1;
    console.log(random_number);
    if (random_number ===1){
        return "rock";
    }
    else if (random_number === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playerPlay() {
    while (true){
        const player_selection = prompt("Choose rock, paper, or scissors.").toLowerCase();
        if (player_selection === "rock" || player_selection === "paper" || 
                player_selection === "scissors"){
            return player_selection;
        }
    }
}