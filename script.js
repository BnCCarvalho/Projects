'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// console.log(document.querySelector('.number').textContent);

// document.querySelector('.score').textContent = 10;
// console.log(document.querySelector('.score').textContent);

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const bgColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const textNumber = function (text) {
  document.querySelector('.number').textContent = text;
};

const widthNumber = function (sWidth) {
  document.querySelector('.number').style.width = sWidth;
};

const textScore = function (tScore) {
  document.querySelector('.score').textContent = tScore;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    displayMessage('No number! ⛔');
    bgColor('#CD853F');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('Yes, that correct! 👌');
    bgColor('#60b347');
    textNumber(secretNumber);
    widthNumber('65rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? 'No, the number is lower! 👇'
          : 'No, the number is higher! 👆'
      );
      bgColor('#222');
      textScore(score);
      score--;
    } else {
      displayMessage('You lost this game! 😢');
      bgColor('#FF0000');
      textScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayMessage('Start guessing...');
  bgColor('#222');
  textNumber('?');
  widthNumber('15rem');
  textScore(score);
  document.querySelector('.guess').value = '';
});
