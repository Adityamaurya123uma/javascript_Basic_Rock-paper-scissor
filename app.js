const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

// Generation of Users Choice
const possibleChoices = document.querySelectorAll('button')

//Variable Declartion
let userChoice
let computerChoice
let result

// Displaying users choice
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))


// Generating and displaying computers choice
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber === 1) {
        computerChoice = "rock"
    }
    if (randomNumber === 2) {
        computerChoice = "scissors"
    }
    if (randomNumber === 3) {
        computerChoice = "paper"
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

// Generating and displaying result

function getResult() {
    if (computerChoice === userChoice) {
        result = "its a draw!"
    }

    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = "you win!"
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = "you lost!"
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = "you lost!"
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = "you win!"
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = "you win!"
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = "you lost!"
    }
    resultDisplay.innerHTML = result
}