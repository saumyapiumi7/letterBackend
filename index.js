const express = require('express');
const connectDB = require('./config/db.js'); // Ensure this path is correct
const tripRoutes = require('./routes/trips.js'); // Adjust the path as necessary

const app = express(); // Define your Express app
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

const cors = require('cors');
app.use(cors());

// Use trip routes
app.use('/api/trips', tripRoutes);

// Connect to Database and Start Server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error(`Failed to connect to MongoDB: ${err.message}`);
  });
