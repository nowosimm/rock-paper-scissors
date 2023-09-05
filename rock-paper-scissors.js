let userScore = 0
let computerScore = 0
let gameNumber = 0

const rockButton = document.createElement('button');
rockButton.textContent = "Rock"
rockButton.onclick = function() {
    playRound('rock');
}
document.body.appendChild(rockButton);

const paperButton = document.createElement('button');
paperButton.textContent = "Paper"
paperButton.onclick = function() {
    playRound('paper');
}
document.body.appendChild(paperButton);

const scissorsButton = document.createElement('button');
scissorsButton.textContent = "Scissors"
scissorsButton.onclick = function() {
    playRound('scissors');
}
document.body.appendChild(scissorsButton);


function playRound(userChoice) {
    if (gameNumber >= 5) {
        alert('press the reset button to play more')
        return;
    }
    gameNumber = gameNumber + 1

    let computerChoice = getComputerChoice()

    if (computerChoice == userChoice) {
        displayResults("Its a tie!")
    }

    if (userChoice == "rock" && computerChoice == "paper") {
        displayResults("computer chose paper, you lose :(")
        computerScore = computerScore + 1
    }

    if (userChoice == "rock" && computerChoice == "scissors") {
        displayResults("computer chose scissors, you win!")
        userScore = userScore + 1
    }

    if (userChoice == "paper" && computerChoice == "scissors") {
        displayResults("computer chose scissors, you lose :(")
        computerScore = computerScore + 1
    }

    if (userChoice == "paper" && computerChoice == "rock") {
        displayResults("computer chose rock, you win!")
        userScore = userScore + 1
    }

    if (userChoice == "scissors" && computerChoice == "rock") {
        displayResults("computer chose rock, you lose :(")
        computerScore = computerScore + 1
    }

    if (userChoice == "scissors" && computerChoice == "paper") {
        displayResults("computer chose paper, you win!");
        userScore = userScore + 1
    }

    updateScore("Your score is " + userScore + "!");

    if (gameNumber >= 5) {
        if (userScore > computerScore) {
            alert("You Win!")
        } else {
            alert("You lose :(")
        }
        const resetButton = document.createElement('button');
        resetButton.textContent = "Play Again!"
        resetButton.onclick = function() {
            userScore = 0;
            computerScore = 0;
            gameNumber = 0;
            updateScore("");
            displayResults("");
            resetButton.remove();
        }
        document.body.appendChild(resetButton);
        
    }
}

function updateScore(message) {
    const scoreDiv = document.querySelector("#score");
    scoreDiv.textContent = message;
}
function displayResults(message) {
    const resultsDiv = document.querySelector("#results");
    resultsDiv.textContent = message;
}

function getComputerChoice() {
    // randomNumber can be (0, 1, 2)
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        return 'rock';
    }
    if (randomNumber == 1) {
        return 'paper';
    }
    if (randomNumber == 2) {
        return 'scissors'
    }
}