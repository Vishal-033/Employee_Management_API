//Isme Express application configure hogi:

const express = require('express');
const app = express();
app.use(express.json());



app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;



// Is app ke through hum:

// routes
// middleware
// error handling

// sab configure karenge.