function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body;
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let intervalId;

startButton.addEventListener('click', startBackgroundChange);
stopButton.addEventListener('click', stopBackgroundChange);

function startBackgroundChange() {
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;
}

function stopBackgroundChange() {
  clearInterval(intervalId);
  startButton.disabled = false;
  stopButton.disabled = true;
}
