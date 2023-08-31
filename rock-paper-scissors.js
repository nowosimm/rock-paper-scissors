let userScore = 0
let computerScore = 0
let gameNumber = 0

const rockButton = document.createElement('button');
rockButton.textContent = "Rock"
rockButton.onclick = playRound;
document.body.appendChild(rockButton);

const paperButton = document.createElement('button');
paperButton.textContent = "Paper"
paperButton.onclick = playRound;

document.body.appendChild(paperButton);

const scissorsButton = document.createElement('button');
scissorsButton.textContent = "Scissors"
scissorsButton.onclick = playRound;

document.body.appendChild(scissorsButton);


// let shouldPlay = prompt("Do you want to play rock, paper, scissors?")
// if (shouldPlay.toLowerCase() == "asdfsd") {
//     while (true) {

//         playRound();

//         let playAgain = prompt("Do you want to play again?")
//         if (playAgain.toLowerCase() == "no") {
//             break;
//         }

//         userScore = 0
//         computerScore = 0
//         gameNumber = 0

//     }

// } else {
//     alert("you dont wont to play")
// }

function playRound() {
    gameNumber = gameNumber + 1

    let userChoice = prompt('Pick rock, paper, or scissors!')
    userChoice = userChoice.toLowerCase()

    let computerChoice = getComputerChoice()

    if (computerChoice == userChoice) {
        alert("Its a tie!")
    }

    if (userChoice == "rock" && computerChoice == "paper") {
        alert("computer chose paper, you lose :(")
    }

    if (userChoice == "rock" && computerChoice == "scissors") {
        alert("computer chose scissors, you win!")
        userScore = userScore + 1
    }

    if (userChoice == "paper" && computerChoice == "scissors") {
        alert("computer chose scissors, you lose :(")
    }

    if (userChoice == "paper" && computerChoice == "rock") {
        alert("computer chose rock, you win!")
        userScore = userScore + 1
    }

    if (userChoice == "scissors" && computerChoice == "rock") {
        alert("computer chose rock, you lose :(")
    }

    if (userChoice == "scissors" && computerChoice == "paper") {
        alert("computer chose paper, you win!")
    }

    alert("Your score is " + userScore + "!")
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