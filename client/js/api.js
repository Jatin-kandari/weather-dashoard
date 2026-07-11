// API base URL
const API_URL = 'https://weather-dashoard.onrender.com/api/weather';

// Fetch weather data from our backend
async function fetchWeather(city) {
    try {
        const response = await fetch(`${API_URL}/${city}`);
        
        if (!response.ok) {
            throw new Error('City not found');
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}