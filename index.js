const express = require('express');
const connectDB = require('./config/db.js'); // Ensure this path is correct

const app = express(); // Define your Express app
const PORT = process.env.PORT || 5000;

// Middleware and routes can be set up here
// app.use(...);

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
