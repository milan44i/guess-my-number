'use strict';

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const generateRandomNumber1to20 = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const setBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

let secretNumber = generateRandomNumber1to20();
let score = 20;
let highscore = 0;

document.querySelector('.btn.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  // Guess out of range or no guess
  if (guess <= 0 || guess > 20) {
    displayMessage('⛔ No number entered / Out of bounds');
  }

  // Wrong guess
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '📈 Number too high' : '📉 Number too low'
      );
      score--;
      setScore(score);
    } else {
      displayMessage('💣 Game over!');
      score = 0;
      setScore(score);
    }
  }

  // Correct guess
  else {
    displayMessage('🎉 Congratulations!');
    setBackgroundColor('#60b347');
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

document.querySelector('.btn.again').addEventListener('click', () => {
  setBackgroundColor('#222');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  score = 20;
  setScore(score);
  secretNumber = generateRandomNumber1to20();
  displayMessage('Start guessing...');
});
