let score = {
    computer : 0,
    human : 0
};
let round = 1;


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

const play = function(humanChoice, computerChoice) {
    
    let result;
    
    if (humanChoice === computerChoice) {
        result = "draw";
    }
    else if(humanChoice === "rock" && computerChoice === "scissors" ||
       humanChoice === "scissors" && computerChoice === "paper" ||
       humanChoice === "paper" && computerChoice === "rock") 
       {
        result = "win";
    }
    else {
        result = "lose";
    }
    
    round++;
    updateScore(result, humanChoice, computerChoice);
}


const choiceMenu = document.addEventListener("click", (event) => {
    const choice = event.target.id;
    if(choice !== "" && round <= 5) {
        play(choice, getComputerChoice());
    }
})

function updateScore(result, humanChoice, computerChoice) {
    const p = document.querySelector("p");
    if (round > 5) {
        p.style.backgroundColor = "purple";
        p.textContent = `The game is finished... ${getWinner()}`;
        score.human = 0;
        score.computer = 0;

    }else if (result === "win") {
        score.human++;
        p.style.backgroundColor = "green";
        p.textContent = `You win ! ${humanChoice} beats ${computerChoice} !`;
    }else if (result === "lose"){
        score.computer++;
        p.style.backgroundColor = "red";
        p.textContent = `you lose ! ${computerChoice} beats ${humanChoice}...`;
    }else{
        p.style.backgroundColor = "yellow";
        p.textContent = "It's a draw...";
    }
}

function getWinner() {
    if (score.human > score.computer) {
        return "You are the winner !";
    }
    else if (score.computer > score.human) {
        return "The computer wins...";
    }
    else {
        return "It's a draw, what a game !";
    }
}