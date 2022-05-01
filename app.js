
function computerPlay() {
  let myChoices = ["rock", "paper", "scissors"];
  let randomItem = myChoices[Math.floor(Math.random()*myChoices.length)];
  return randomItem;
}


const playerSelection = prompt("Rock, paper, or scissors");
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie!";
  }
  if (playerSelection === "rock" && computerSelection === "scissors")  {
    return "You win! Rock beats scissors";
  } else if (playerSelection === "rock" && computerSelection !== "scissors") {
    return "You Lose! "+computerSelection+" beats rock";
  }

  if (playerSelection === "paper" && computerSelection === "rock")  {
    return "You win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection !== "rock") {
    return "You Lose! "+computerSelection+" beats paper";
  }

  if (playerSelection === "scissors" && computerSelection === "paper")  {
    return "You win! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection !== "paper") {
    return "You Lose! "+computerSelection+" beats scissors";
  }
}

 console.log(playRound(playerSelection.toLowerCase(), computerSelection));
  
 