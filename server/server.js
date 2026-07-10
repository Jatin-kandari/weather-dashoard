// Import required packages
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());              // Allow frontend to call backend
app.use(express.json());      // Parse JSON request bodies

// Import routes
const weatherRoutes = require('./routes/weatherRoutes');

// Use routes
app.use('/api/weather', weatherRoutes);

// Test route
app.get('/', (req, res) => {
    res.json({ message: '🌦️ Weather Dashboard API is running!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});