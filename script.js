const colors = [];

const ballsParent = document.querySelector('#balls');

function showAnswer(text) {
  document.querySelector('#answer').innerText = text;
}

function checkAnswer(target) {
  const color = document.querySelector('#rgb-color').innerText;
  const guess = target.style.backgroundColor;

  if (color === guess) {
    showAnswer('Acertou!');
  } else {
    showAnswer('Errou! Tente novamente!');
  }
}

for (let index = 0; index < 6; index += 1) {
  const div = document.createElement('div');
  div.className = 'ball';
  div.addEventListener('click', ({ target }) => checkAnswer(target));
  ballsParent.appendChild(div);
}

function randomNumber(a, b) {
  const min = Math.ceil(a);
  const max = Math.floor(b);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateColor() {
  const r = randomNumber(0, 255);
  const g = randomNumber(0, 255);
  const b = randomNumber(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function insertColors() {
  colors.length = 0;
  for (let index = 0; index < 6; index += 1) {
    colors.push(generateColor());
  }
}

function colorToGuess() {
  const position = randomNumber(0, 5);
  document.getElementById('rgb-color').innerText = colors[position];
}

function setBackground() {
  const balls = document.querySelectorAll('.ball');
  for (let index = 0; index < 6; index += 1) {
    balls[index].style.backgroundColor = colors[index];
  }
}

function startNewGame() {
  showAnswer('Escolha uma cor');
  insertColors();
  colorToGuess();
  setBackground();
}

const startBtn = document.querySelector('#reset-game');
startBtn.addEventListener('click', () => {
  startNewGame();
});

window.onload = () => startNewGame();
