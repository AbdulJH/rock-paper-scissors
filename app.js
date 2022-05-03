
function computerPlay() {
  let myChoices = ["rock", "paper", "scissors"];
  let randomItem = myChoices[Math.floor(Math.random()*myChoices.length)];
  return randomItem;
}

let userScore = 0;
let computerScore = 0;

// const playerSelection = prompt("Rock, paper, or scissors");
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie!";
  }
  if (playerSelection === "rock" && computerSelection === "scissors")  {
    userScore++;
    return "Round won! Rock beats scissors";
  } else if (playerSelection === "rock" && computerSelection !== "scissors") {
    computerScore++;
    return "Round Loss! "+computerSelection+" beats rock";
  }

  if (playerSelection === "paper" && computerSelection === "rock")  {
    userScore++;
    return "Round wonn! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection !== "rock") {
    computerScore++;
    return "Round loss! "+computerSelection+" beats paper";
  }

  if (playerSelection === "scissors" && computerSelection === "paper")  {
    userScore++;
    return "Round won! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection !== "paper") {
    computerScore++;
    return "Round Loss! "+computerSelection+" beats scissors";
  }   
}


function rpsClick() {
  const container = document.getElementById("container");
  //rock button
  const btn1 = document.querySelector("#btn1");
  btn1.addEventListener("click", () => {
    test.textContent = playRound("rock", computerPlay());
    trackScores();
  });
  //paper button
  const btn2 = document.querySelector("#btn2");
  btn2.addEventListener("click", () => {
    test.textContent = playRound("paper", computerPlay());
    trackScores();
  });
  //scissors button
  const btn3 = document.querySelector("#btn3");
  btn3.addEventListener("click", () => {
    test.textContent = playRound("scissors", computerPlay());
    trackScores();
  });
}

function trackScores() {
  document.getElementById("gameScore").innerHTML =("User score: "+userScore)+ (" Computer score: "+computerScore);

  if (userScore === 5 && computerScore !== 5) {
    document.getElementById("finalScore").innerHTML = ("Users wins game!!!")
  } else if (userScore !== 5 && computerScore === 5) {
    document.getElementById("finalScore").innerHTML = ("Computer wins game :(")
  }
}

function gameOver() {
  
}

rpsClick();
trackScores(); 



