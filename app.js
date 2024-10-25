const express = require('express');
const bodyParser = require('body-parser');
const tripsRoute = require('./routes/trips');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/trips', tripsRoute);

module.exports = app;
