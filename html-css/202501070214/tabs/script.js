// タブボタンとタブ内容を取得
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

// 各タブボタンにクリックイベントを設定
tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const targetTab = button.getAttribute("data-tab");

        // 現在のアクティブなタブボタンをリセット
        tabButtons.forEach((btn) => btn.classList.remove("active"));

        // 現在のアクティブなタブ内容をリセット
        tabContents.forEach((content) => content.classList.remove("active"));

        // クリックしたボタンと対応するタブ内容をアクティブ化
        button.classList.add("active");
        document.getElementById(targetTab).classList.add("active");
    });
});
