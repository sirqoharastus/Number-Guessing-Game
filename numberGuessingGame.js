function numberGuessingGame() {
    console.log("Welcome to Q's number guessing game")
    
    let name = prompt("Please enter your name")
    let email = prompt("Please enter your email")

    guessNumber()

}

function guessNumber() {
    let isAnswerCorrect = true
    let guessLimit = 2
    let playerScore = 0

    while(isAnswerCorrect) {
        if (playerChoice != 0) {
            console.log(playerScore+ "")
        }
        let numberGenerated = Math.random() * (guessLimit - 1) + 1
        var playerChoice = prompt("Enter your choice between the numbers 1 and "+ guessLimit)

        if (playerChoice.toString == numberGenerated.toString) {
            playerScore++
            console.log("Your guess is correct!!")
            console.log("Your Score:"+ playerScore)

        }
        else {
            isAnswerCorrect = false
        }

        console.log("Your Score:"+ playerScore)
        console.log("Thank you for playing")

    }
}

