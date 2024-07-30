const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const resultText = document.getElementById("resultText");
const compscore = document.getElementById("compscore");
const yourscore = document.getElementById("yourscore");

rockButton.addEventListener("click", () => playGame("rock"));
paperButton.addEventListener("click", () => playGame("paper"));
scissorsButton.addEventListener("click", () => playGame("scissors"));


let i=0;
let computerValue = 0;
let yourValue =0;


function playGame(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  i++;
   if(i<=10){

      if (userChoice === computerChoice) {
       
        resultText.textContent = "It's a tie!";
      } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
      ) {
         yourValue++;
         yourscore.textContent = yourValue;
         resultText.textContent = "You win!";
      } else {
         computerValue++;
         compscore.textContent = computerValue;
       resultText.textContent = "Computer wins!";
      }
   }else{
      resultText.textContent = "Game Over for 10 Round "
      // compscore.textContent = computerValue;
      // yourscore.textContent = yourValue;
      if(computerValue>yourValue){
         alert("computer won !")
      }else{
         alert("You won !")
         
      }
      
   }

}





