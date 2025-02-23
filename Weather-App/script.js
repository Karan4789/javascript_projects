
document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('/apikey');
    const data = await response.json();
    const apiKey = data.apiKey;


    const weatherForm = document.querySelector(".weatherForm");
    const cityInput = document.querySelector(".cityInput");
    const card = document.querySelector(".card");

    weatherForm.addEventListener("submit", async event => {

        event.preventDefault();
        const city = cityInput.value;

        if (city) {

            try {
                const WeatherData = await getWeatherData(city, apiKey)
                displayWeatherInfo(WeatherData);
            }

            catch (error) {
                console.error(error);
                displayError(error)
            }
        }
        else {
            displayError("Please enter the city");
        }
    })

    async function getWeatherData(city) {

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(" Couldn't fetch Data :( ");
        }

        return await response.json()

    }

    function displayWeatherInfo(data) {

        const { name: city,
            main: { temp, humidity },
            weather: [{ description, id }] } = data;

        card.textContent = "";
        card.style.display = "flex";

        const cityDisplay = document.createElement("h1");
        const tempDisplay = document.createElement("p");
        const humidityDisplay = document.createElement("p");
        const descDisplay = document.createElement("p");
        const WeatherEmoji = document.createElement("p");

        cityDisplay.textContent = city;
        tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
        humidityDisplay.textContent = `Humidity:${humidity}%`;
        descDisplay.textContent = description;
        WeatherEmoji.textContent = getWeatherEmoji(id);

        cityDisplay.classList.add("cityDisplay");
        tempDisplay.classList.add("tempDisplay");
        humidityDisplay.classList.add("humidityDisplay");
        descDisplay.classList.add("descDisplay");
        WeatherEmoji.classList.add("weatherDisplay");


        card.appendChild(cityDisplay);
        card.appendChild(tempDisplay);
        card.appendChild(humidityDisplay);
        card.appendChild(descDisplay);
        card.appendChild(WeatherEmoji);
    }

    function getWeatherEmoji(weatherid) {
        switch (true) {
            case (weatherid >= 200 && weatherid < 300):
                document.body.style.backgroundImage = "url('assets/img1.jpg')";
                document.body.style.backgroundSize = "cover";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundPosition = "center";
                return "⛈️";
            case (weatherid >= 300 && weatherid < 500):
                document.body.style.backgroundImage = "url('assets/img2.jpg')";
                document.body.style.backgroundSize = "cover";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundPosition = "center";
                return "🌦️";
            case (weatherid >= 500 && weatherid < 600):
                document.body.style.backgroundImage = "url('assets/img3.jpg')";
                document.body.style.backgroundSize = "cover";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundPosition = "center";
                return "🌧️";
            case (weatherid >= 600 && weatherid < 700):
                document.body.style.backgroundImage = "url('assets/img4.jpg')";
                document.body.style.backgroundSize = "cover";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundPosition = "center";
                return "❄️";
            case (weatherid >= 700 && weatherid < 800):  
                document.body.style.backgroundImage = "url('assets/img5.jpg')";
                document.body.style.backgroundSize = "cover";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundPosition = "center";
                return "💨";
            case (weatherid === 800):
                document.body.style.backgroundImage = "url('assets/img6.jpg')";
                document.body.style.backgroundSize = "cover";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundPosition = "center";
                return "☀️";
            case (weatherid > 800 && weatherid < 810):
                document.body.style.backgroundImage = "url('assets/img7.jpg')";
                document.body.style.backgroundSize = "cover";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundPosition = "center";
                return "☁️";
            default:
                return "❓";
        }

    }
    function displayError(message) {


        const errordisplay = document.createElement("p");
        errordisplay.textContent = message;
        errordisplay.classList.add("errorDisplay");

        card.textContent = "";
        card.style.display = "flex";
        card.appendChild(errordisplay);

    }
});