let secretNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const restartButton = document.getElementById("restartButton");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");

guessButton.addEventListener("click", () => {
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "Bitte gib eine Zahl zwischen 1 und 100 ein.";
    return;
  }

  attemptsLeft--;
  attemptsDisplay.textContent = `Versuche übrig: ${attemptsLeft}`;

  if (guess === secretNumber) {
    message.textContent = `🎉 Glückwunsch! Die Zahl war ${secretNumber}.`;
    endGame();
  } else if (attemptsLeft === 0) {
    message.textContent = `😢 Leider verloren. Die Zahl war ${secretNumber}.`;
    endGame();
  } else {
    message.textContent = guess < secretNumber ? "Zu niedrig!" : "Zu hoch!";
  }

  guessInput.value = "";
  guessInput.focus();
});

restartButton.addEventListener("click", () => {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 10;
  attemptsDisplay.textContent = `Versuche übrig: ${attemptsLeft}`;
  message.textContent = "";
  guessInput.value = "";
  guessButton.disabled = false;
  restartButton.classList.add("hidden");
});

function endGame() {
  guessButton.disabled = true;
  restartButton.classList.remove("hidden");
}
