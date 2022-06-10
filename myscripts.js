
function computerPlay() {

    //returns either a rock, paper or scissors
    let played = ["rock", "paper", "scissors"];
    let random_index = Math.floor(Math.random() * 3);
    return played[random_index]
}


function playRound(yourSelection, computerSelection) {

    let computer = computerSelection
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
    let winner = ""

    for (let i = 0; i < 5; i++) {

        let choice = prompt(`Rock, Paper, Scissors -- Shoot! the score is ${yourTally} to ${computerTally}`)
        let yourChoice = choice

        let roundOutcome = playRound(yourChoice, computerPlay())
        alert(roundOutcome)


        if (roundOutcome.includes("win")) {
            yourTally += 1
        }
        
        else if (roundOutcome.includes("tie")) {

        }

        else {
            computerTally +=1
        }

     }

    if (yourTally > computerTally) {
        winner = "You Win a 5-round game of Rock Paper Scissors Against the Computer"
    }

    else if (computerTally == yourTally) {
        winner = "Tie!"
    }

    else {
        winner = "The Compter Wins"
    }

    return prompt(winner)
    

}

let btn = document.querySelectorAll(".button")

btn.forEach ((e) => {
    e.addEventListener('click', playgame_UI)
})


function playgame_UI() {
    let yourChoice = this.id
    let outcome = playRound(yourChoice, computerPlay())
    return console.log(outcome)
}



if (typeof window !== "undefined") {
    let btn = document.querySelectorAll(".button")
    console.log(btn)
}







