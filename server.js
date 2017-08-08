const express = require('express');

const app = express();

// Creating a route for my website
app.get('/', (req, res) => {
  res.send('Hello person');
});

// Creating an endpoint for my API
app.get('/api/robot', (req, res) => {
  const myRobot = {
    name: 'R2-D2',
    colors: ['blue', 'white'],
    languages: 'beep-boop'
  };
  // this is how we retrun JSON from an endpoint
  res.json(myRobot);
});

app.listen(3000, () => {
  console.log('We are rocking on 3000');
});
