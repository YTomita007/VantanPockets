const audio = document.getElementById("audio");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const stopButton = document.getElementById("stop");
const progressBar = document.getElementById("progress-bar");

// 再生ボタン
playButton.addEventListener("click", () => {
  audio.play();
});

// 一時停止ボタン
pauseButton.addEventListener("click", () => {
  audio.pause();
});

// 停止ボタン
stopButton.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0; // 再生位置をリセット
});

// 進捗バーの更新
audio.addEventListener("timeupdate", () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress || 0;
});

// 進捗バーを操作した際の再生位置の変更
progressBar.addEventListener("input", () => {
  audio.currentTime = (progressBar.value / 100) * audio.duration;
});
