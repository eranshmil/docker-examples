const express = require('express');
const mongoose = require('mongoose');
const bluebird = require('bluebird');

const app = express();

const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGODB_URI || 'mongodb://0.0.0.0:27017/test';

// Define mongoose scheme and model
const personScheme = new mongoose.Schema({
  firstName: String,
  lastName: String
});

const Person = mongoose.model('Person', personScheme);

// Define routes
app.get('/', (req, res) => {
  const john = new Person({ firstName: 'John', lastName: 'Doe' });

  // Create a new person
  john
    .save()
    .then(person => res.json(person))
    .catch(error => res.json(error));
});

// Apply required middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use blue bird promises for mongoose
Promise = bluebird;

// Listen to error event and exit app
mongoose.connection.on('error', error => {
  console.log(`Mongo connection error: ${error}`);
});

// Connect to MongoDB server
mongoose.connect(
  mongoUri,
  { useNewUrlParser: true }
);

// Start local server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
