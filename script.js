const ballsParent = document.querySelector('#balls');

for (let index = 0; index < 6; index += 1) {
  const div = document.createElement('div');
  div.className = 'ball';
  ballsParent.appendChild(div);
}

function randomNumber() {
  const min = Math.ceil(0);
  const max = Math.floor(255);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateColor() {
  const r = randomNumber();
  const g = randomNumber();
  const b = randomNumber();
  return `rgb(${r}, ${g}, ${b})`;
}

function setBackground() {
  const balls = document.querySelectorAll('.ball');

  for (let index = 0; index < 6; index += 1) {
    balls[index].style.backgroundColor = generateColor();
  }
}

window.onload = () => {
  setBackground();
};
