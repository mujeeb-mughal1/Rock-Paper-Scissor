const playerControls = document.querySelector(".controls")
const result = document.getElementById("result-text");
const roundElement = document.getElementById("round-count");
const p1Score=document.querySelector("#p1-score");
const p2Score=document.querySelector("#p2-score");
let isWinner = false;
let roundCount=0;
let userChoice;
let computerChoice;
let userScore = 0;
let computerScore = 0;
const MAX_ROUND = 5;

const displayResult = (isWinner)=>{
    
    if (isWinner) {
        setScore(userScore,computerScore);
        result.textContent=` 🎉 You win this round! ${userChoice} beats ${computerChoice}`

    } else if (!isWinner) {
        setScore(userScore,computerScore);
        result.textContent=` 😢 You lose this round! ${computerChoice} beats ${userChoice}`

    } 
    
}
const finalResult =  ()=>{
    if(userScore>computerScore){
        result.textContent=` 🎉 Congratulations! You won the overall game!`
    }else if(computerScore>userScore){
        result.textContent=` 😢 Game Over! The computer won the overall game.`
    }else{
        result.textContent=` 🤝 It's an overall tie game!`   
    }
}


//  Logic to get the computer choice
const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex].trim();
};


// Logic to play the entire game 
const playGame = (userChoice,computerChoice) =>{

    
  //  Logic to play a single round
  function playRound(userChoice, computerChoice) {
        if(userChoice === computerChoice) {
             result.textContent=` 🤝 It's a tie game!`;
        } else if(
        (userChoice === "rock" && computerChoice === "scissor") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissor" && computerChoice === "paper")
        ){ 
            ++userScore;
            isWinner=true;
            displayResult(isWinner); 
        } else{
            ++computerScore;
            isWinner=false;
            displayResult(isWinner);
        }
  }

playRound(userChoice, computerChoice);

}

//  Logic to get the user choice
playerControls.addEventListener('click',(e)=>{
    if(roundCount<MAX_ROUND){
        if (e.target === e.currentTarget) {
            return;
        }
        if(e.target.classList.contains("btn-choice")){
            userChoice = e.target.textContent.toLowerCase().trim();
        }
        setRound();
        
        computerChoice=getComputerChoice();
        addImg();
        playGame( userChoice,computerChoice);
        if(MAX_ROUND==roundCount) finalResult();
    } else{
        reset()
    }
  
    

});

const setRound = ()=>{
    ++roundCount;
    roundElement.textContent=roundCount;
        
    
}

const setScore= (userScore,computerScore)=>{
    p1Score.textContent=userScore;
    p2Score.textContent=computerScore;
};


const reset= ()=>{
        roundCount=0;
        roundElement.textContent=roundCount;
        result.textContent=`Waiting for move...`;
        userScore=0;
        computerScore=0;
        setScore(userScore, computerScore);
}

const addImg = ()=>{
    const playerChoiceImg = document.getElementById("player-img");
    const computerChoiceImg = document.getElementById("computer-img");
    playerChoiceImg.src=`./images/${userChoice}.jpg`;
    computerChoiceImg.src=`./images/${computerChoice}.jpg`;
}