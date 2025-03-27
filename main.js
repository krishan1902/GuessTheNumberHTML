var winpic = document.createElement("img");
winpic.src = "winpic.gif";

// Generate a random number between 1 and 100
var Zufallszahl = Math.floor(Math.random() * 100) + 1;

// Keep track of the number of remaining guesses
var remaining = 10;

// Get references to the relevant elements in the HTML
var remainingElem = document.getElementById("guesses-remaining");
var inputElem = document.getElementById("guess-input");
var guessButtonElem = document.getElementById("guess-button");
var resultElem = document.getElementById("result");

// When the user clicks the "Guess" button
guessButtonElem.addEventListener("click", function() {
  // Get the user's guess
  var guess = inputElem.value;

  // Check if the user's guess is correct
  if (guess == Zufallszahl) {
    resultElem.textContent = "Congratulations! You guessed the number!";
    inputElem.disabled = true;
    guessButtonElem.disabled = true;
    document.body.appendChild(winpic);
  } else if (guess < Zufallszahl) {
    resultElem.textContent = "Sorry, your guess is too low.";
  } else {
    resultElem.textContent = "Sorry, your guess is too high.";
  }

  // Update the number of remaining guesses
  remaining--;
  remainingElem.textContent = remaining;

  // Check if the user has run out of guesses
  if (remaining == 0) {
    
    resultElem.textContent = "Sorry, you're out of guesses. The number was " + Zufallszahl + ".";
    inputElem.disabled = true;
    guessButtonElem.disabled = true;
    
  }
  // Get a reference to the "New Game" button
var newGameButtonElem = document.getElementById("new-game-button");

// When the "New Game" button is clicked
newGameButtonElem.addEventListener("click", function() {
  
  if (document.body.contains(winpic)) {
    document.body.removeChild(winpic);
  }
  // Generate a new random number
  Zufallszahl = Math.floor(Math.random() * 100) + 1;

  // Reset the number of remaining guesses
  remaining = 10;
  remainingElem.textContent = remaining;

  // Clear the input field and the result message
  inputElem.value = "";
  resultElem.textContent = "";

  //Enable the input field and the "Guess" button
  inputElem.disabled = false;
  guessButtonElem.disabled = false;
});

});
