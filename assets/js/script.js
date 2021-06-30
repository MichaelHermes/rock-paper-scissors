var finishedMessage = document.querySelector("#thanksForPlaying");

// Keep track of the current session's record.
var record = {
    wins: 0,
    losses: 0,
    draws: 0
}

// These are the accepted values for an RPS game.
var rpsValues = ["R", "P", "S"];

// This function starts a new game of RPS.
function playGame() {
    var userInput;
    var computerChoice;

    toggleFinishedMessage(false);

    // Continue playing new rounds until the user decides they are done.
    do {
        // First, ask for the user's input.
        userInput = prompt("Would you like to shoot Rock (R), Paper (P) or Scissors (S)?");

        // If the user chose to cancel, don't continue.
        if (!userInput) { break; }

        userInput = userInput.toUpperCase();
        if (!rpsValues.includes(userInput)) {
            // If the user entered an invalid option, alert them.
            alert("You entered an invalid option!");
        }
        else {
            // Get the computer's choice - R, P, or S.
            computerChoice = getComputerChoice();

            // Determine the outcome of this game by comparing userInput to computerChoice.
            determineOutcome(userInput, computerChoice);

            // Alert the current game's record to the user.
            alert(`Here are your standings:\n   Wins: ${record.wins}\n   Losses: ${record.losses}\n   Draws: ${record.draws}`);
        }
    } while (confirm("Would you like to play again?"));

    toggleFinishedMessage(true);
}

function toggleFinishedMessage(show) {
    if (show) {
        document.getElementById("thanksForPlaying").style.display = "block";
    }
    else {
        document.getElementById("thanksForPlaying").style.display = "none";
    }
}

// Gets a random value for the computer's shoot.
// Returns the computer's choice.
function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
    computerChoice = rpsValues[randomNumber];

    var computerChoiceDisplay;
    if (computerChoice === "R") { computerChoiceDisplay = "Rock (R)" }
    else if (computerChoice === "P") { computerChoiceDisplay = "Paper (P)" }
    else { computerChoiceDisplay = "Scissors (S)" }

    alert(`The computer chose ${computerChoiceDisplay}`);

    return computerChoice;
}

// Compares the user's choice to the computer's to determine an outcome and displays that outcome via an alert to the user.
function determineOutcome(userInput, computerChoice) {
    console.log(`Player: ${userInput}, Computer: ${computerChoice}`);

    if (userInput === computerChoice) {
        alert("It's a draw!");
        record.draws++;
    }
    else {
        switch (computerChoice) {
            case "R":
                if (userInput === "P") {
                    alert("You win!");
                    record.wins++;
                }
                else if (userInput === "S") {
                    alert("Computer wins...");
                    record.losses++;
                }
                break;
            case "P":
                if (userInput === "S") {
                    alert("You win!");
                    record.wins++;
                }
                else if (userInput === "R") {
                    alert("Computer wins...");
                    record.losses++;
                }
                break;
            case "S":
                if (userInput === "R") {
                    alert("You win!");
                    record.wins++;
                }
                else if (userInput === "P") {
                    alert("Computer wins...");
                    record.losses++;
                }
                break;
        }
    }
}