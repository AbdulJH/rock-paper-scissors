
function computerPlay() {
  let myChoices = ["rock", "paper", "scissors"];
  let randomItem = myChoices[Math.floor(Math.random()*myChoices.length)];
  return randomItem;
}

let userScore = 0;
let computerScore = 0;

let rounds = 0;


function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie!";
  }
  if (playerSelection === "rock" && computerSelection === "scissors")  {
    userScore++;
    return "You win! Rock beats scissors";
  } else if (playerSelection === "rock" && computerSelection !== "scissors") {
    computerScore++;
    return "You Lose! "+computerSelection+" beats rock";
  }

  if (playerSelection === "paper" && computerSelection === "rock")  {
    userScore++;
    return "You win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection !== "rock") {
    computerScore++;
    return "You Lose! "+computerSelection+" beats paper";
  }

  if (playerSelection === "scissors" && computerSelection === "paper")  {
    userScore++;
    return "You win! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection !== "paper") {
    computerScore++;
    return "You Lose! "+computerSelection+" beats scissors";
  }  
}

  function game() {
    for (let i=0; i<6; i++) {
      let playerSelection = prompt("Rock, Paper, or Scissors");
      const computerSelection = computerPlay();
     console.log(playRound(playerSelection.toLowerCase(), computerSelection));
     console.log("User score: "+userScore);
     console.log("Computer score: "+computerScore);  
     while (i === 5) {
       if (userScore > computerScore) {
         console.log("You win!!!");
         break;
       } else if (userScore < computerScore) {
         console.log("You lose! :(")
         break;
       } else if (userScore == computerScore) {
         console.log("Draw game!")
         break;
       }
     }
    }
  }
  
  game();





  
 