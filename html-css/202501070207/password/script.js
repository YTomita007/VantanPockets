const generateButton = document.getElementById("generate");
const passwordDisplay = document.getElementById("password");
const lengthInput = document.getElementById("length");

generateButton.addEventListener("click", () => {
  const length = parseInt(lengthInput.value, 10);
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  passwordDisplay.textContent = password;
});
