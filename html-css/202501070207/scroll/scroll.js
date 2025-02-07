// スムーズスクロールを実現するための処理
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    // スクロール対象の位置を取得
    const targetId = this.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);

    // スムーズにスクロール
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  });
});
