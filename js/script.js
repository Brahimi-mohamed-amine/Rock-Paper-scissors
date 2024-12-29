
let humanScore = 0;
let computerScore = 0;
let humanSelection = playGame();
let computerSelection = getComputerChoice();
//console.log(getComputerChoice());
//console.log(getHumanChoice());
//console.log(humanSelection);
//console.log(computerSelection);


// give you some random choices 
function random() {
    let randomstring = Math.floor(Math.random() * 3); 
  //console.log(computerChoice);
  if (randomstring == 0) {
      return "rock";
  }else if(randomstring == 1) {
      return "paper";
  }else{
      return "scissors";
  }
}

// generate numbers from 0 to 2 [0.1.2]
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3); 
  //console.log(computerChoice);
  if (computerChoice == 0) {
      return "rock";
  }else if(computerChoice == 1) {
      return "paper";
  }else{
      return "scissors";
  }
}

// get input from user and make it case insensitive 
function getHumanChoice(Selection) {
    Selection = prompt("chose between rock paper scissors",random().toLowerCase());
    return Selection;
}

// our function for 5 game round 

function playGame(h,p) {
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice){
            console.log(`you choose ${humanChoice}, and computer choose ${computerChoice} its even`);
            console.log(`you ${++humanScore}`);
            console.log(`pc ${++computerScore}`);
        }else if (humanChoice === "rock" & computerChoice === "paper") {
            console.log(`computer won he choose ${computerChoice} and you choose ${humanChoice}`);
            console.log(`you ${humanScore}`);
            console.log(`pc ${++computerScore}`);
        }else if(humanChoice === "paper" & computerChoice === "rock") {
            console.log(`you won you choose ${humanChoice} and he choose ${computerChoice}`);
            console.log(`you ${++humanScore}`);
            console.log(`pc ${computerScore}`);
        }else if (humanChoice === "paper" & computerChoice === "scissors"){
            console.log(`computer won he choose ${computerChoice} and you choose ${humanChoice}`)
            console.log(`you ${humanScore}`);
            console.log(`pc ${++computerScore}`);
        }else if (humanChoice === "scissors" & computerChoice === "paper"){
            console.log(`you won you choose ${humanChoice} and he choose ${computerChoice}`)
            console.log(`you ${++humanScore}`);
            console.log(`pc ${computerScore}`);
        }else if (humanChoice === "scissors" & computerChoice === "rock"){
            console.log(`computer won he choose ${computerChoice} and you choose ${humanChoice}`)
            console.log(`you ${humanScore}`);
            console.log(`pc ${++computerScore}`);
        }else if (humanChoice === "rock" & computerChoice === "scissors"){
            console.log(`you won you choose ${humanChoice} and he choose ${computerChoice}`)
            console.log(`you ${++humanScore}`);
            console.log(`pc ${computerScore}`);
        }else{
            console.log("you have to type between rock paper scissors no other choose:D")
            console.log(`you ${humanScore}`);
            console.log(`pc ${++computerScore}`);
        }
    }
    //our loop to make the game go for 5 rounds
    for (let i = 1; i <= 5 ; i++) {
        h = getHumanChoice();
        // user decide to cancel! 
        if (!h) {
            console.log("thank you for playing :D");
            break;
        }
        p = getComputerChoice();
        playRound(h,p);
    }
}
