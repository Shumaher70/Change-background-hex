const wrapper = document.querySelector('.wrapper');
const btnEl = document.querySelector('.btn');
const textEl = document.querySelector('.text');
const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

btnEl.addEventListener('click', changeHex);

function changeHex() {
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    hex += hexValues[randomNumber()];
  }
  wrapper.style.backgroundColor = hex;
  textEl.textContent = `HEX COLOR: ${hex}`;
}

function randomNumber() {
  return Math.floor(Math.random() * hexValues.length);
}
