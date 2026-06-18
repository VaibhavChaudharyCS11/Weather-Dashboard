const apiKey = "6cc31bbff02e365ba2d18fad05097610";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const condition = document.getElementById("condition");
const errorDiv = document.getElementById("error");

async function getWeather(city) {

    try {

        errorDiv.textContent = "";

        const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        cityName.textContent = data.name;

        temp.textContent = data.main.temp;

        humidity.textContent = data.main.humidity;

        wind.textContent = data.wind.speed;

        condition.textContent =
        data.weather[0].description;

    }
    catch(error) {

        errorDiv.textContent = error.message;

        cityName.textContent = "--";
        temp.textContent = "--";
        humidity.textContent = "--";
        wind.textContent = "--";
        condition.textContent = "--";
    }
}

searchBtn.addEventListener("click", () => {

    const city = cityInput.value.trim();

    if(city !== "") {
        getWeather(city);
    }

});
