
const getComputerChoice = function() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "scissors";
        case 2:
            return "paper";
    }
}

const getHumanChoice = function() {
    let choice;
    do {
        choice = prompt("Choose between Rock-Paper-Scissors...");   
    } while (!(choice.toLowerCase() === "rock"
    || choice.toLowerCase() === "scissors"
    || choice.toLowerCase() === "paper"));
    return choice.toLowerCase();
}

const playRound = function(humanChoice, computerChoice) {
    
    console.log("You:  " + humanChoice);
    console.log("Opponent:  " + computerChoice);
    if (humanChoice === computerChoice) {
        console.log("Thats a DRAW");
        return "draw";
    }
    
    if(humanChoice === "rock" && computerChoice === "scissors" ||
       humanChoice === "scissors" && computerChoice === "paper" ||
       humanChoice === "paper" && computerChoice === "rock") 
       {
        console.log(`You win ! ${humanChoice} beats ${computerChoice} !`);
        return "win";
    }else {
        console.log(`You lose ! ${computerChoice} beats ${humanChoice} !`);
        return "lose";
    }
    
}

function playGame() {
    let score = {
        computer : 0,
        human : 0
    };

    for(let i = 0; i < 5; i++) {
        let roundResult;
        roundResult = playRound(getHumanChoice(), getComputerChoice());
        if (roundResult === "win") {
            score.human++
        }else if (roundResult === "lose") {
            score.computer++       
        }
        console.log(score);
    }

// End of game

    if(score.human === score.computer){
        console.log("Thats a draw ! What a game !");
    }else if (score.human > score.computer) {
        console.log("You've won against the computer !!!");
    }else{
        console.log("Unfortunately you lost...");
    }
    

}