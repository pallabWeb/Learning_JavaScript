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

