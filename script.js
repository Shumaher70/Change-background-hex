const backgroundEl = document.querySelector('body');
const btnEl = document.querySelector('.btn');
const textEl = document.querySelector('.text');
const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
changeHex();
btnEl.addEventListener('click', changeHex);
function changeHex() {
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    const valueHex = Math.floor(Math.random() * hexValues.length);
    hex += hexValues[valueHex];
    console.log(hex);
  }
  backgroundEl.style.backgroundColor = hex;
  textEl.textContent = `HEX COLOR:${hex}`;
}
