const buttons = document.querySelectorAll('button');

let computerTrackPoints = 0;
let playerTrackPoints = 0;

//add event listeners to the buttons
for (i = 0; i < buttons.length; i++){
  buttons[i].addEventListener('click', playGame);
}

function playGame(e){
  //player selection
  let playerSelection = e.target.innerText;
  console.log(`I'm playerSelection: ${playerSelection}`);
  //computer options
  const options = ['rock', 'paper', 'scissors'];
  //generate random number 0 to 2
  let computerPick = Math.floor(Math.random() * options.length);
  //create computer selection
  const computerSelection = options[computerPick];
  console.log(`I'm computerSelection: ${computerSelection}`);
  //display computer's selection on DOM
  document.getElementById("computerP").innerHTML = `Computer picked: ${computerSelection}`;

//game
function playRound(playerSelection, computerSelection) {
  if (playerSelection === `rock` && computerSelection === `paper`) {
    computerTrackPoints += 1;
    return `You lose, ${computerSelection} beats ${playerSelection}`;
  } else if (
    playerSelection === `rock` &&
    computerSelection === `rock`
  ) {
    return `Ties, you both picked ${playerSelection}`;
  } else if (
    playerSelection === `rock` &&
    computerSelection === `scissors`
  ) {
    playerTrackPoints += 1;
    return `You win, ${playerSelection} beats ${computerSelection}`;
  } else if (
    playerSelection === `paper` &&
    computerSelection === `paper`
  ) {
    return `Ties, you both picked ${playerSelection}`;
  } else if (
    playerSelection === `paper` &&
    computerSelection === `rock`
  ) {
    playerTrackPoints += 1;
    return `You win, ${playerSelection} beats ${computerSelection}`;
  } else if (
    playerSelection === `paper` &&
    computerSelection === `scissors`
  ) {
    computerTrackPoints += 1;
    return `You lose, ${computerSelection} beats ${playerSelection}`;
  } else if (
    playerSelection === `scissors` &&
    computerSelection === `paper`
  ) {
    playerTrackPoints += 1;
    return `You win, ${playerSelection} beats ${computerSelection}`;
  } else if (
    playerSelection === `paper` &&
    computerSelection === `scissors`
  ) {
    computerTrackPoints += 1;
    return `You lose, ${computerSelection} beats ${playerSelection}`;
  } else if (
    playerSelection === `scissors` &&
    computerSelection === `rock`
  ) {
    computerTrackPoints +=1 ;
    return `You lose, ${computerSelection} beats ${playerSelection}`;
  } else if (
    playerSelection === `scissors` &&
    computerSelection === `scissors`
  ) {
    return `Ties, you both picked ${playerSelection}`;
  }
}
//display on console who wins
console.log(playRound(playerSelection, computerSelection));
document.getElementById("winner").innerHTML = playRound(playerSelection, computerSelection);

document.getElementById("computerPoints").innerHTML = computerTrackPoints / 2;
document.getElementById("playerPoints").innerHTML = playerTrackPoints / 2;


}