// Require the express module
const express = require('express');
// require the node module
const mongoose = require('mongoose');


// Create an instance of express
const app = express();
// Set a constant for the port number
const PORT = process.env.PORT || 3000;

const dbURI = 'mongodb://localhost:27017/%20PNP4_DB'; 

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.error(err));

// Handle MongoDB connection events
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
  console.log('Successfully connected to the database');
});

// Define a route for the root of the app
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Tell the app to listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
