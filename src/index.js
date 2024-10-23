const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');  // Import the central router file

const app = express();
const port = 3000;  // Use whichever port your server runs on

app.use(cors());
app.use(express.json());

// Use the central router for all routes
app.use('/api', routes);

// Connect to MongoDB
mongoose.connect('mongodb://admin:@Agent009@3.110.165.57:27017/shark')
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
