const apiKey = '261fa5cc0bc1eca31f0f2ed9e88c0be1'; 

async function getWeather() {
    const location = document.getElementById('location').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            throw new Error(data.message || 'Location not found');
        }

        const weatherInfo = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Description: ${data.weather[0].description}</p>
        `;

        document.getElementById('weather-info').innerHTML = weatherInfo;
    } catch (error) {
        document.getElementById('weather-info').innerHTML = `<p>${error.message}</p>`;
    }
}
