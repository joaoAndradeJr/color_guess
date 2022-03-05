const ballsParent = document.querySelector('#balls');

for (let index = 0; index < 6; index += 1) {
  const div = document.createElement('div');
  div.className = 'ball';
  ballsParent.appendChild(div);
}
