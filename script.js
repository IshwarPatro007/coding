'use strict';

/*
console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.message`).textContent = `🎉 Correct Number! 🎉`;

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = `OVER 9000`;

document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);
*/

let secretNumber = Math.trunc(Math.random() * 25) + 1;
let score = 25;
let highscore = 0;
console.log(`Secrete-Number: ${secretNumber}`);
document.querySelector(`.number`).value = secretNumber;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  console.log(guess, typeof guess);

  if (!guess) {
    ddisplayMessage(`❌ No Number ❌`);
  } else if (guess === secretNumber) {
    displayMessage(`⭕ Correct Number! ⭕`);
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      displayMessage(`🔼 Number is too High!`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.score`).textContent = 0;
      displayMessage(`💀💀💀 You Failed`);
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      displayMessage(`🔽 Number is too low!`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.score`).textContent = 0;
      displayMessage(`💀💀💀 You Failed`);
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 25;
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  console.log(`Secrete-Number: ${secretNumber}`);

  displayMessage(`Start Guessing...`);
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
