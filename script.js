let score = {
    computer : 0,
    human : 0
};
let round = 1;
const history = document.querySelector("ul");
const message = document.querySelector(".message");
const resetButton = document.createElement("button");
const p = document.querySelector("p");
resetButton.textContent = "Restart Game...";
resetButton.setAttribute("id", "reset");

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

document.addEventListener("click", (event) => {
    const choice = event.target.id;
    if(choice !== "" && round <= 5 && choice !== "reset") {
        play(choice, getComputerChoice());
    }
    else if (choice === "reset") {
        resetGame();
    }
})

function updateScore(result, humanChoice, computerChoice) {
    
    addToList(result, humanChoice, computerChoice);
    if (round >= 6) {
        p.style.backgroundColor = "purple";
        p.textContent = `The game is finished... ${getWinner()}`;
        message.appendChild(resetButton);
    }   
}

function resetGame () {
    score.human = 0;
    score.computer = 0;
    round = 1;
    p.textContent = "Empty message....";
    p.style.backgroundColor = "white";
    const x = document.querySelectorAll("li");
    x.forEach((element) => {
        element.remove();
    })
    resetButton.remove();
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