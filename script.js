
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
    if (humanChoice === "rock") {

        if(computerChoice === "scissors") {
            console.log("You win ! Rock beats scissors !");
            return "win";
        }else{
            console.log("You lose ! Paper beats rock...")
            return "lose";   
        }

    }else if(humanChoice === "scissors") {

        if(computerChoice === "paper") {
            console.log("You win ! Scissors beats paper !");
            return "win";
        }else{
            console.log("You lose ! Rock beats scissors...")
            return "lose";    
        }

    }else if(humanChoice === "paper") {

        if(computerChoice === "rock") {
            console.log("You win ! Paper beats rock !");
            return "win";
        }else{
            console.log("You lose ! Scissors beats paper...")
            return "lose";   
        }

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

    if(score.human === score.computer){
        console.log("Thats a draw ! What a game !");
    }else if (score.human > score.computer) {
        console.log("You've won against the computer !!!");
    }else{
        console.log("Unfortunately you lost...");
    }
    

}