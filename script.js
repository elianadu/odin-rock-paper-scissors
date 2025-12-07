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

function getHumanChoice() {
  return prompt("Please enter your choice.");
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (
      (humanChoice == "rock" && computerChoice == "scissors") ||
      (humanChoice == "scissors" && computerChoice == "paper") ||
      (humanChoice == "paper" && computerChoice == "rock")
    ) {
      humanScore++;
      console.log("You win! " + humanChoice + " beats " + computerChoice);
    } else if (humanChoice == computerChoice) {
      console.log(
        "You tie! " + humanChoice + " is the same as " + computerChoice
      );
    } else {
      computerScore++;
      console.log(
        "You lose... " + humanChoice + " is beaten by " + computerChoice
      );
    }
  }
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }
  console.log(
      "Final score: Human " + humanScore + " , Computer " + computerScore
    );
}

playGame();
