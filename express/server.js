const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

// Define routes
app.get('/', (req, res) => {
  res.send('Hello!');
});

// Apply required middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Start local server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
