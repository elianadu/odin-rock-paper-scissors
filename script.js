let humanScore = 0;
let computerScore = 0;
const container = document.querySelector("#container");

const rockBtn = document.createElement("button");
rockBtn.textContent = "rock";
const paperkBtn = document.createElement("button");
paperkBtn.textContent = "paper";
const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "scissors";


const resetBtn = document.createElement("button");
resetBtn.textContent = "reset";

const roundResult = document.createElement("div");
const display = document.createElement("div");

rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});
paperkBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});
scissorsBtn.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});
resetBtn.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  display.textContent = "";
});

container.appendChild(rockBtn);
container.appendChild(paperkBtn);
container.appendChild(scissorsBtn);
container.appendChild(resetBtn);
container.appendChild(roundResult);
container.appendChild(display);

function getComputerChoice() {
  let randNum = Math.floor(Math.random() * 3);
  switch (randNum) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    default:
      return "scissors";
  }
}

/* function getHumanChoice() {
  return prompt("Please enter your choice.");
} */

function playRound(humanChoice, computerChoice) {
  // humanChoice = humanChoice.toLowerCase();
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    roundResult.textContent =
      "You win the round! " + humanChoice + " beats " + computerChoice;
  } else if (humanChoice === computerChoice) {
    roundResult.textContent =
      "You tied  the round! " + humanChoice + " is the same as " + computerChoice;
  } else {
    computerScore++;
    roundResult.textContent =
      "You lost the round... " + humanChoice + " is beaten by " + computerChoice;
  }
  if (humanScore >= 5 || computerScore >= 5) {
    if (humanScore > computerScore && humanScore === 5) {
      display.textContent = "You won!";
    } else if (humanScore < computerScore && computerScore === 5) {
      display.textContent = "You lost :(";
    }
    roundResult.textContent = "";
  } else {
    display.textContent =
      "Current score: Human " + humanScore + ", Computer " + computerScore;
  }
}

/* for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  } */
