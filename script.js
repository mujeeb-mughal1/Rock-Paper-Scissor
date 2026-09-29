//  Logic to get the computer choice
function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 0.34) {
    return "rock";
  } else if (randomNumber < 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Logic to get the human choice
function getHumanChoice() {
  let choice = prompt("Enter rock, paper, or scissors:");
  // Handle edge case if user cancels the prompt
  if (!choice) return ""; 
  return choice.trim().toLowerCase();
}

// Logic to play the entire game (includes scores and 5 rounds)
function playGame() {

  let humanScore = 0;
  let computerScore = 0;

  //  Logic to play a single round
  function playRound(humanChoice, computerChoice) {
    if (!humanChoice) {
      console.log("Cancelled round or no input provided.");
      return;
    }

    if (humanChoice === computerChoice) {
      console.log(`It's a tie! Both chose ${humanChoice}`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
  }

  // Play 5 rounds using a loop
  for (let round = 1; round <= 5; round++) {
    console.log(`--- Round ${round} ---`);
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(`You chose: ${humanSelection}`);
    console.log(`Computer chose: ${computerSelection}`);

    playRound(humanSelection, computerSelection);
    
    console.log(`Current Score -> You: ${humanScore} | Computer: ${computerScore}`);
  }

  // Declare final winner after 5 rounds
  console.log("====================");
  console.log("FINAL GAME RESULTS:");
  console.log(`Final Score -> You: ${humanScore} | Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("🎉 Congratulations! You won the overall game!");
  } else if (computerScore > humanScore) {
    console.log("😢 Game Over! The computer won the overall game.");
  } else {
    console.log("🤝 It's an overall tie game!");
  }
}

// Start the game automatically when the page loads
playGame();