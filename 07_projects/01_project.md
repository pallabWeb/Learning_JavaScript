# Projects Related to DOM

## Project Links

- [Click here to view projects on StackBlitz](https://stackblitz.com/edit/dom-project-learning-js?file=index.html)

## Solution Code

### Project 1 (Color Changar)

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

### Project 2 (BMI Calculator)

```javascript
const form = document.querySelector('form');
// This usecase will give you empty
// const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a Valid Height';
  }
  if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a Valid Weight';
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  let message = '';

  if (bmi < 18.5) {
    message = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 25) {
    message = 'Normal weight';
  } else if (bmi >= 25 && bmi < 30) {
    message = 'Overweight';
  } else {
    message = 'Obese';
  }

  results.innerHTML = `Your BMI is ${bmi} (${message})`;
});
```
### Project 3 (Digital Clock)

```javascript
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```
### Project 4 (Guess The Number Game)

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please Enter a Valid Number');
  } else if (guess < 1) {
    alert('The Number Cannot be 0');
  } else if (guess > 100) {
    alert('Please Enter less then 100 Number');
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You Won`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOO Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<button id = "newGame">Start New Game</button>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButoon = document.querySelector('#newGame');
  newGameButoon.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
```

