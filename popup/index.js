let timer;
let startTime;

function startTimer() {
  startTime = new Date().getTime();
  timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  document.getElementById("timerDisplay").textContent = "00:00:00";
}

function updateTimer() {
  const currentTime = new Date().getTime();
  const elapsedTime = currentTime - startTime;
  const seconds = Math.floor(elapsedTime / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  const formattedTime = `${pad(hours)}:${pad(minutes % 60)}:${pad(seconds % 60)}`;
  document.getElementById("timerDisplay").textContent = formattedTime;
}

function pad(number) {
  return (number < 10 ? '0' : '') + number;
}

document.getElementById("startButton").addEventListener("click", startTimer);
document.getElementById("stopButton").addEventListener("click", stopTimer);
document.getElementById("resetButton").addEventListener("click", resetTimer);