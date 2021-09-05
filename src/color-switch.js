const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.body,
}

let intervalId = null;

refs.startBtn.addEventListener('click', onStart);
refs.stopBtn.addEventListener('click', onStop)

function onStart() {
  intervalId = setInterval(changeColor, 1000);
  refs.startBtn.disabled = true;
}

function changeColor() {
  const color = colors[randomIntegerFromInterval(0, colors.length - 1)];
  refs.body.style.backgroundColor = color;
}

function onStop() {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
}

