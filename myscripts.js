
function computerPlay() {

    //returns either a rock, paper or scissors
    let played = ["Rock", "Paper", "Scissors"];
    let random_index = Math.floor(Math.random() * 3);
    return played[random_index]
}


function playRound(yourSelection, computerSelection) {

    let computer = computerSelection.toLowerCase()
    let you = yourSelection.toLowerCase()

    if (you == "rock") {

        if (computer == "rock") {
            return "The Computer also chose rock, tie!"
        }

        if (computer == "paper") {
            return "Computer plays paper, so you lose!"
        }

        if (computer == "scissors") {
            return "The computer played scissors, so you win!"
        }
    }

    else if (you == "paper") {

        if(computer == "rock") {
            return "You win, you beat the computers Rock!"
        }

        if (computer == "paper") {
            return "The computer plays Paper, it is a tie"
        }

        if (computer == "scissors") {
            return "You lose! The computer chose scissors"
        }
    }

    else if (you == "scissors") {

        if (computer == "rock") {
            return "Computer Played Rock, So you lose!"
        }

        if (computer == "paper") {
            return "Computer Played Paper, So you win!"
        }

        if (computer == "scissors") {
            return "The Computer also played scissors, so it is a tie!"
        }
    }

}

function game () {

    let yourTally = 0
    let computerTally = 0

    for (let i = 0; i < 5; i++) {
        let choice = prompt("Rock, Paper, Scissors -- Shoot!")
        let yourChoice = choice

        let roundOutcome = playRound(yourChoice, computerPlay())



     }
    

}


game()  