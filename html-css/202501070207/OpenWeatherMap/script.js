// OpenWeatherMap APIキー (自分のキーをここに追加)
const apiKey = "22b65002a875fd4b71a5b2f198dac71d";

// HTML要素の取得
const cityInput = document.getElementById("city");
const getWeatherButton = document.getElementById("getWeather");
const weatherDiv = document.getElementById("weather");
const errorDiv = document.getElementById("error");

// ボタンのクリックイベントリスナー
getWeatherButton.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city === "") {
    showError("Please enter a city name.");
    return;
  }
  getWeather(city);
});

// 天気データを取得する関数
async function getWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("City not found.");
    }
    const data = await response.json();
    displayWeather(data);
    clearError();
  } catch (error) {
    showError(error.message);
  }
}

// 天気データを表示する関数
function displayWeather(data) {
  const { name, main, weather } = data;
  weatherDiv.innerHTML = `
    <h2>Weather in ${name}</h2>
    <p>Temperature: ${main.temp}°C</p>
    <p>Humidity: ${main.humidity}%</p>
    <p>Description: ${weather[0].description}</p>
  `;
}

// エラーメッセージを表示する関数
function showError(message) {
  errorDiv.textContent = message;
  weatherDiv.innerHTML = "";
}

// エラーをクリアする関数
function clearError() {
  errorDiv.textContent = "";
}
