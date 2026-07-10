const axios = require('axios');

// Get weather for a city
exports.getWeather = async (req, res) => {
    try {
        const { city } = req.params;
        const apiKey = process.env.WEATHER_API_KEY;

        if (!apiKey) {
            return res.status(500).json({ error: 'API key not configured' });
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await axios.get(url);

        res.json({
            city: response.data.name,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            windSpeed: response.data.wind.speed,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
};