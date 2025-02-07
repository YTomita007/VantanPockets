const carousel = document.querySelector(".carousel");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0; // 現在のスライドのインデックス
const totalSlides = carousel.children.length; // スライドの総数
const slideWidth = carousel.children[0].clientWidth; // 1つのスライドの幅

// 次のスライドに移動する関数
function nextSlide() {
currentIndex = (currentIndex + 1) % totalSlides; // 次のインデックスを計算
updateCarousel();
}

// 前のスライドに移動する関数
function prevSlide() {
currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // 前のインデックスを計算
updateCarousel();
}

// カルーセルを更新する関数
function updateCarousel() {
const offset = -currentIndex * slideWidth; // スライドの位置を計算
carousel.style.transform = `translateX(${offset}px)`; // スライドを移動
}

// ボタンのイベントリスナー
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

// 自動スライドの設定（オプション）
setInterval(nextSlide, 5000); // 5秒ごとに次のスライドへ
