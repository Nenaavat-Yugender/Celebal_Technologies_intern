// Import required modules
const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Create an Express app
const app = express();

// Use the port from environment or default to 3000
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Import route modules
const homeRoutes = require('./routes/homeRoutes');
const userRoutes = require('./routes/userRoutes');
const aboutRoutes = require('./routes/aboutRoutes');
const serviceRoutes = require('./routes/serviceRoutes');

// Use routes for specific paths
app.use('/', homeRoutes);         // Home page routes
app.use('/users', userRoutes);    // User profile routes
app.use('/about', aboutRoutes);   // About page routes
app.use('/service', serviceRoutes); // Service page routes

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
