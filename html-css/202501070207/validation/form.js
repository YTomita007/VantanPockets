// フォームの送信処理
const form = document.getElementById("contact-form");

// フォームが送信される前にバリデーション
form.addEventListener("submit", function (e) {
  // 入力内容の検証
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    e.preventDefault(); // 送信を中止

    alert("すべての項目を入力してください。");
  } else if (!validateEmail(email)) {
    e.preventDefault(); // 送信を中止

    alert("有効なメールアドレスを入力してください。");
  }
});

// メールアドレスのバリデーション関数
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}
