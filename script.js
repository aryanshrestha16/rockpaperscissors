"use strict"
const Choices = ["Rock","Scissors","Paper"];
let playerWins = 0;
let computerWins = 0;
document.querySelector("#rock").addEventListener("click",() => playRound("Rock"));
document.querySelector("#paper").addEventListener("click",() => playRound("Paper"));
document.querySelector("#scissor").addEventListener("click",() => playRound("Scissors"));



function playRound (playerSelection){
    if (playerWins === 5 || computerWins === 5){
        return;
    }
    const roundscore = document.querySelector(".roundscore");
    const selection = document.querySelector(".selection");
    let computerSelection = getComputerChoice();
    console.log(computerSelection);
    console.log(playerSelection);
    if (playerSelection === computerSelection) {
        selection.innerHTML = `Player: ${playerSelection} <br>Computer: ${computerSelection}`;
        roundscore.textContent = "Draw";
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        selection.innerHTML = `Player: ${playerSelection} <br>Computer: ${computerSelection}`;
        roundscore.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerWins += 1;
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        selection.innerHTML = `Player: ${playerSelection} <br>Computer: ${computerSelection}`;
        roundscore.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerWins += 1;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        selection.innerHTML = `Player: ${playerSelection} <br>Computer: ${computerSelection}`;
        roundscore.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerWins += 1;
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        selection.innerHTML = `Player: ${playerSelection} <br>Computer: ${computerSelection}`;
        roundscore.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerWins += 1;
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        selection.innerHTML = `Player: ${playerSelection} <br>Computer: ${computerSelection}`;
        roundscore.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerWins += 1;
    }
    else{
        selection.innerHTML = `Player: ${playerSelection} <br>Computer: ${computerSelection}`;
        roundscore.textContent =`You Win! ${playerSelection} beats ${computerSelection}`;
        playerWins += 1;
    }
    updateScore();
    if (playerWins === 5){
        announceWinner("Player");
    }
    if (computerWins === 5 ){
        announceWinner("Computer");
    }
}


function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * Choices.length);
    return Choices[randomNumber];
}

function resetGame() {
    const winner = document.querySelector(".results");
    const roundscore = document.querySelector(".roundscore");
    roundscore.textContent = "Welcome to Rock Paper Scissors Game.";
    const selection = document.querySelector(".selection");
    selection.textContent = "";
    playerWins = 0;
    computerWins = 0; 
    updateScore();
    winner.remove();
}

function updateScore() {
    const computerScore = document.querySelector(".computerScore");
    const playerScore = document.querySelector(".playerScore");
    computerScore.textContent = `Computer: ${computerWins}`;
    playerScore.textContent = `You: ${playerWins}`;

}

function announceWinner(winner){
    const playAgain = document.getElementById("playAgain");


    const playbutton = document.createElement("input");
    playbutton.type = "button";
    playbutton.value = "Play Again?";
    playbutton.onclick = resetGame;


    playAgain.innerHTML = `${winner} has Won!<br>`;


    playAgain.appendChild(playbutton);

}
