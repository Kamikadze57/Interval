let count = 0;
const firstTask = setInterval(() => {
  count++;
  console.log(count);
  if (count >= 5) {
    clearInterval(firstTask);
  }
}, 1000);

const frBox = document.querySelector(".frbox");
const scBox = document.querySelector(".scbox");

function getRandomColorRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
function getRandomTop() {
  const top = Math.floor(Math.random() * 100);
  return `${top}%`;
}
function getRandomLeft() {
  const left = Math.floor(Math.random() * 100);
  return `${left}%`;
}
const boxes = setInterval(() => {
  const randomColor = getRandomColorRGB();
  const randomTop = getRandomTop();
  const randomLeft = getRandomLeft();
  frBox.style.backgroundColor = randomColor;
  scBox.style.backgroundColor = randomColor;
  frBox.style.left = randomLeft;
  frBox.style.top = randomTop;
}, 1500);