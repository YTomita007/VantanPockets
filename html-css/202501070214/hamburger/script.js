// ハンバーガーメニューのボタンとナビゲーションリストを取得
const hamburgerMenu = document.getElementById("hamburger-menu");
const navList = document.getElementById("nav-list");

// ハンバーガーメニューのクリックイベント
hamburgerMenu.addEventListener("click", () => {
  navList.classList.toggle("show"); // 'show'クラスの追加・削除でメニューの表示/非表示を切り替え
});
