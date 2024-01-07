let timer;
let startTime;
let startFormattedTime;
let stopFormattedTime;

function startTimer() {
  startTime = new Date().getTime();
  startFormattedTime = getFormattedTime();
  timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timer);
  stopFormattedTime = getFormattedTime();
  updateDisplay();
}

function resetTimer() {
  clearInterval(timer);
  startFormattedTime = null;
  stopFormattedTime = null;
  updateDisplay();
}

function updateTimer() {
  const currentTime = new Date().getTime();
  const elapsedTime = currentTime - startTime;
  const seconds = Math.floor(elapsedTime / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  const formattedTime = `${pad(hours)}:${pad(minutes % 60)}:${pad(seconds % 60)}`;
  updateDisplay(formattedTime);
}

function updateDisplay(currentTime = "00:00:00") {
  document.getElementById("timerDisplay").textContent = currentTime;
  document.getElementById("startTime").textContent = startFormattedTime;
  document.getElementById("stopTime").textContent = stopFormattedTime;
}

function getFormattedTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
  return (number < 10 ? '0' : '') + number;
}

document.getElementById("startButton").addEventListener("click", startTimer);
document.getElementById("stopButton").addEventListener("click", stopTimer);
document.getElementById("resetButton").addEventListener("click", resetTimer);