
let humanScore = 0;
let counter = 0;
let computerScore = 0;
//console.log(getComputerChoice());
//console.log(getHumanChoice());
//console.log(humanSelection);
//console.log(computerSelection);


// give you some random choices 

// generate numbers from 0 to 2 [0.1.2]
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  //console.log(computerChoice);
  if (computerChoice == 0) {
    return "rock";
  } else if (computerChoice == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}


// our function for 5 game round 

function playGame(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    para.innerText += ` you choose ${humanChoice}, and computer choose ${computerChoice} its even\n`;
    para.innerText += ` you ${++humanScore}\n`;
    para.innerText += ` pc ${++computerScore}\n\n`;
    ++counter;
  } else if (humanChoice === "rock" & computerChoice === "paper") {
    para.innerText += ` computer won he choose ${computerChoice} and you choose ${humanChoice}\n`;
    para.innerText += ` you ${humanScore}\n`;
    para.innerText += ` pc ${++computerScore}\n\n`;
    ++counter;
  } else if (humanChoice === "paper" & computerChoice === "rock") {
    para.innerText += ` you won you choose ${humanChoice} and he choose ${computerChoice}\n`;
    para.innerText += ` you ${++humanScore}\n`;
    para.innerText += ` pc ${computerScore}\n\n`;
    ++counter;
  } else if (humanChoice === "paper" & computerChoice === "scissors") {
    para.innerText += ` computer won he choose ${computerChoice} and you choose ${humanChoice}\n`
    para.innerText += ` you ${humanScore}\n`;
    para.innerText += ` pc ${++computerScore}\n\n`;
    ++counter;
  } else if (humanChoice === "scissors" & computerChoice === "paper") {
    para.innerText += ` you won you choose ${humanChoice} and he choose ${computerChoice}\n`
    para.innerText += ` you ${++humanScore}\n`;
    para.innerText += ` pc ${computerScore}\n\n`;
    ++counter;
  } else if (humanChoice === "scissors" & computerChoice === "rock") {
    para.innerText += ` computer won he choose ${computerChoice} and you choose ${humanChoice}\n`
    para.innerText += ` you ${humanScore}\n`;
    para.innerText += ` pc ${++computerScore}\n\n`;
    ++counter;
  } else if (humanChoice === "rock" & computerChoice === "scissors") {
    para.innerText += ` you won you choose ${humanChoice} and he choose ${computerChoice}\n`
    para.innerText += ` you ${++humanScore}\n`;
    para.innerText += ` pc ${computerScore}\n\n`;
    ++counter;
  } else {
    //para.innerText += " you have to type between rock paper scissors no other choose:D"
    //para.innerText += ` you ${humanScore}\n`;
    //para.innerText += ` pc ${++computerScore}\n`;
  }
  if (counter == 5) {
    const finalResult = document.createElement('div');
    const restart = document.createElement('div');
    restart.setAttribute('style', ' margin: 0px;background: #1E2952;padding: 1em 0em 1em 0em; color: white;font-size: 28px;')
    restart.innerText = 'Reload your page to start agine'
    finalResult.setAttribute('style', 'border-radius: 8px; padding: 1em; margin: auto; background: #76ABDF; text-align: center;width:50%;');
    if (humanScore == computerScore) {
      finalResult.innerText = `Final Result: draw`;
    } else if (humanScore > computerScore) {
      finalResult.innerText = `Final Result: You won`;
    } else {
      finalResult.innerText = `Final Result: Pc won`;
    }
    document.body.appendChild(finalResult);
    container.replaceChildren(restart);
    document.body.insertBefore(restart, para);
  }
}

const container = document.createElement('div')

container.setAttribute('style', 'display:flex; justify-content: space-around; margin: 0px;background: #1E2952;padding: 1em 0em 1em 0em;')
const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const btn3 = document.createElement('button');

btn1.setAttribute('style', 'margin: auto; padding: 1em 3em 1em 3em;border-radius: 30px;background:#99FFFF;font-size: 1em;')
btn2.setAttribute('style', 'margin: auto; padding: 1em 3em 1em 3em;border-radius: 30px;background:#99FFFF;font-size: 1em;')
btn3.setAttribute('style', 'margin: auto; padding: 1em 3em 1em 3em;border-radius: 30px;background:#99FFFF;font-size: 1em;')

btn1.textContent = 'rock'
btn2.textContent = 'paper'
btn3.textContent = 'scissors'

container.appendChild(btn1);
container.appendChild(btn2);
container.appendChild(btn3);

document.body.appendChild(container);


const rock = btn1.addEventListener('click', (choice, pc) => {
  choice = 'rock';
  pc = getComputerChoice();
  console.log(pc)
  playGame(choice, pc);
})
const paper = btn2.addEventListener('click', (choice, pc) => {
  choice = 'paper';
  pc = getComputerChoice();
  console.log(pc)
  playGame(choice, pc);
})
const scissor = btn3.addEventListener('click', (choice, pc) => {
  choice = 'scissors';
  pc = getComputerChoice();
  console.log(pc)
  playGame(choice, pc);
})


const div = document.createElement('div');
const para = document.createElement('p');
para.innerText = `Play Rounds:\n\n`
div.appendChild(para);
para.setAttribute('style', 'margin: 0px;background: #ADD8E6;padding:1em;')
document.body.appendChild(div);










