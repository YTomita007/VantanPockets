let timerInterval;
let elapsedTime = 0;

const timeDisplay = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

function formatTime(ms) {
const totalSeconds = Math.floor(ms / 1000);
const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
const seconds = String(totalSeconds % 60).padStart(2, "0");
return `${hours}:${minutes}:${seconds}`;
}

function updateDisplay() {
timeDisplay.textContent = formatTime(elapsedTime);
}

startButton.addEventListener("click", () => {
if (!timerInterval) {
    const startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    updateDisplay();
    }, 100);
}
});

stopButton.addEventListener("click", () => {
clearInterval(timerInterval);
timerInterval = null;
});

resetButton.addEventListener("click", () => {
clearInterval(timerInterval);
timerInterval = null;
elapsedTime = 0;
updateDisplay();
});

// 初期表示
updateDisplay();
