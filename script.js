let score = {
    computer : 0,
    human : 0
};
let round = 1;
const history = document.querySelector("ul");

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
    else if(isWiningChoice(humanChoice, computerChoice)) {
        result = "win";
    }
    else {
        result = "lose";
    }
    
    round++;
    updateScore(result, humanChoice, computerChoice);
}

function isWiningChoice (humanChoice, computerChoice) {
    return humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "scissors" && computerChoice === "paper" ||
            humanChoice === "paper" && computerChoice === "rock"
}

const choiceMenu = document.addEventListener("click", (event) => {
    const choice = event.target.id;
    if(choice !== "" && round <= 5) {
        play(choice, getComputerChoice());
    }
})

function updateScore(result, humanChoice, computerChoice) {
    const p = document.querySelector("p");
    addToList(result, humanChoice, computerChoice);
    if (round >= 6) {
        p.style.backgroundColor = "purple";
        p.textContent = `The game is finished... ${getWinner()}`;
        score.human = 0;
        score.computer = 0;
    }   
}

function addToList (result, humanChoice, computerChoice) {
    const li = document.createElement("li");
    if (result === "win") {
        score.human++
        li.style.backgroundColor = "green";
        li.textContent = `You win ! ${humanChoice} beats ${computerChoice} !`;
    }
    else if(result === "lose") {
        score.computer++
        li.style.backgroundColor = "red";
        li.textContent = `you lose ! ${computerChoice} beats ${humanChoice}...`;
    }
    else if (result === "draw") {
        li.style.backgroundColor = "yellow";
        li.textContent = "It's a draw...";
    }
    console.log(history);
    history.appendChild(li);
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