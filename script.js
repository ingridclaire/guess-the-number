// Variable to store the list of guesses
let guesses = [];

// Variable for store the correct random number
let correctNumber = getRandomNumber();


window.onload = function() {
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("restart-game").addEventListener("click", initGame)
}


// Functionality for playing the whole game

function playGame(){
  displayResult();
  displayHistory();
  document.getElementById('number-guess').value = null;
}


// Show the result for if the guess it too high, too low, or correct

function displayResult() {
  let guess = document.getElementById('number-guess').value;
  saveGuessHistory(guess);

  if (guess > correctNumber) {
    showNumberAbove();
  } else if (guess < correctNumber) {
    showNumberBelow();
  } else {
    showYouWon();
  }
}

// Initialize a new game by resetting all values and content on the page

function initGame(){
  guesses = [];
  correctNumber = getRandomNumber();
  document.getElementById('number-guess').value = null;
  resetResultContent();
}


// Reset the HTML content for guess history

function resetResultContent(){
  document.getElementById("result").innerHTML = "";
  document.getElementById("history").innerHTML = "";

}


// Return a random number between 1 and 100

function getRandomNumber(){
  return Math.ceil(Math.random() * 100);
}


// Save guess history

function saveGuessHistory(guess) {

  guesses.push(guess);
}


// Display guess history to user

function displayHistory() {
  let index = 0;
  let list = "<ul class='list-group'>";
  while (index < guesses.length) {
    list += `<li class='list-group-item'>You guessed ${guesses[index]}</li>`;
    index++;
  }
  list += '</ul>'
  document.getElementById("history").innerHTML = list;
}



/**
* Retrieve the dialog based on if the guess is wrong or correct
*/
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
const text = "Awesome job, you got it!"

//  Retrieve the dialog using the getDialog() function

  const dialog = getDialog('won', text);

  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
const text = "Your guess is too high!"

//  Retrieve the dialog using the getDialog() function


  const dialog = getDialog('warning', text);

  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"

//  Retrieve the dialog using the getDialog() function

  const dialog = getDialog('warning', text);

  document.getElementById("result").innerHTML = dialog;
}