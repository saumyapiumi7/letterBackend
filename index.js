const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

// Connect to Database and Start Server
connectDB();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
