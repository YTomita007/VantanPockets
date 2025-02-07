const toggleButton = document.getElementById("theme-toggle");

// クリックイベントでテーマを切り替える
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // // ローカルストレージに現在のテーマを保存
    // const isDarkMode = document.body.classList.contains("dark-mode");
    // localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});

// ページ読み込み時にテーマを適用
// // window.addEventListener("DOMContentLoaded", () => {
// //     const savedTheme = localStorage.getItem("theme");
// //     if (savedTheme === "dark") {
// //         document.body.classList.add("dark-mode");
// //     }
// });
