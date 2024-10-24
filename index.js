const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://saumyapiumi7:123@cluster0.0ma9k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema and model for storing detected objects
const ObjectSchema = new mongoose.Schema({
  count: Number,
  timestamp: { type: Date, default: Date.now },
});

const ObjectModel = mongoose.model('Object', ObjectSchema);

// POST endpoint to receive data from Arduino
app.post('/api/data', (req, res) => {
  const { count } = req.body; // Expecting count in the request body
  const objectData = new ObjectModel({ count });
  
  objectData.save()
    .then(() => res.status(201).send('Data saved'))
    .catch(err => res.status(400).send(err));
});

// GET endpoint to retrieve data
app.get('/api/data', (req, res) => {
  ObjectModel.find()
    .then(data => res.json(data))
    .catch(err => res.status(400).send(err));
});

// DELETE endpoint to remove a specific entry by ID
app.delete('/api/data/:id', (req, res) => {
  const { id } = req.params; // Get the ID from the URL parameters

  // Check if ID is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send('Invalid ID format');
  }

  ObjectModel.findByIdAndDelete(id)
    .then((deletedDocument) => {
      if (deletedDocument) {
        res.status(200).send('Data deleted');
      } else {
        res.status(404).send('Data not found');
      }
    })
    .catch(err => res.status(400).send(err));
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
