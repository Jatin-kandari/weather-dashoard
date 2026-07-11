// Get DOM elements
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherCard = document.getElementById('weatherCard');
const errorMsg = document.getElementById('errorMsg');
const loader = document.getElementById('loader');

// Weather card elements
const cityName = document.getElementById('cityName');
const weatherIcon = document.getElementById('weatherIcon');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');

// Handle search
async function handleSearch() {
    const city = cityInput.value.trim();

    // Input validation
    if (!city) {
        showError('Please enter a city name');
        return;
    }

    if (city.length < 2) {
        showError('City name too short');
        return;
    }

    // Hide previous results
    hideError();
    weatherCard.classList.add('hidden');
    loader.classList.remove('hidden');

    try {
        const data = await fetchWeather(city);
        displayWeather(data);
    } catch (error) {
        showError('City not found. Please try again.');
    } finally {
        loader.classList.add('hidden');
    }
}

// Display weather data
function displayWeather(data) {
    cityName.textContent = data.city;
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.icon}@2x.png`;
    temperature.textContent = `${Math.round(data.temperature)}°C`;
    description.textContent = data.description;
    humidity.textContent = `${data.humidity}%`;
    windSpeed.textContent = `${data.windSpeed} m/s`;

    weatherCard.classList.remove('hidden');
}

// Show error
function showError(message) {
    errorMsg.textContent = message;
    errorMsg.classList.remove('hidden');
}

// Hide error
function hideError() {
    errorMsg.classList.add('hidden');
}

// Event listeners
searchBtn.addEventListener('click', handleSearch);

cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

console.log('🌦️ Weather Dashboard loaded!');