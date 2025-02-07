// モーダルとボタンの要素を取得
let modal = document.getElementById("modal");
let openModalButton = document.getElementById("open-modal");
let closeModalButton = document.getElementById("close-modal");

// モーダルを開く
openModalButton.addEventListener("click", () => {
  modal.style.display = "block";
});

// モーダルを閉じる
closeModalButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// モーダルの外側をクリックした場合にも閉じる
window.addEventListener("click", (event) => {
  console.log(event.target)
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
