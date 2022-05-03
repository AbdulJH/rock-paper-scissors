
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
//  console.log(playRound("playerSelection",computerSelection));
//  const btn = document.querySelector("#btn1");
//  btn.onclick = () => console.log(playRound("rock", computerSelection));



function rpsClick() {
  const container = document.getElementById("container");
  let test = document.getElementById("test");
  let test2 = document.getElementById("test2");
  test2.textContent = userScore;

  //rock button
  const btn1 = document.querySelector("#btn1");
  btn1.addEventListener("click", () => {
    test.textContent = playRound("rock", computerPlay());
  });
  //paper button
  const btn2 = document.querySelector("#btn2");
  btn2.addEventListener("click", () => {
    test.textContent = playRound("paper", computerPlay());
  });
  //scissors button
  const btn3 = document.querySelector("#btn3");
  btn3.addEventListener("click", () => {
    test.textContent = playRound("scissors", computerPlay());
  });

}

function removeListen() {


}
rpsClick();







  
 