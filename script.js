var Choices = ['Rock', 'Paper', 'Scissors'];
var playerCounter = 0;
var computerCounter = 0;

function playRound (playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        console.log("Draw");
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        computerCounter += 1;
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        computerCounter += 1;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        computerCounter += 1;
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log(`You Win! ${computerSelection} beats ${playerSelection}`);
        playerCounter += 1;
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log(`You Win! ${computerSelection} beats ${playerSelection}`);
        playerCounter += 1;
    }
    else{
        console.log(`You Win! ${computerSelection} beats ${playerSelection}`);
        playerCounter += 1;
    }
}


function getPlayerChoice(){
    var choice = prompt("Enter your choice: ");
    choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase()
    return choice;
}

function getComputerChoice(){
    var randomNumber = Math.floor(Math.random() * Choices.length);
    return Choices[randomNumber];
}

function playGame() {
    for (var i = 1; i <= 5; i++){
        var computerChoice = getComputerChoice();
        var playerChoice = getPlayerChoice();
        playRound(playerChoice,computerChoice);
        console.log(`Player: ${playerCounter} \nComputer: ${computerCounter}`);
    }
}
console.log("Welcome to Rock Paper Scissors game. \n You will play 5 rounds with the computer.");
playGame();