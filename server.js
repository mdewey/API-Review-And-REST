const express = require('express');
const mustacheExpress = require('mustache-express');

const app = express();
// tell our to use mustahce
app.engine('mst', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mst');
// define a public folder
app.use(express.static('public'));

// Creating a route for my website
app.get('/', (req, res) => {
  res.render('index', {
    name: 'C3-PO',
    colors: ['gold', 'silver', 'red'],
    languages: 'yes'
  });
});

// Creating an endpoint for my API
// this endpoint is where the back end
// meets the front end
// the front can see this url (/api/robot)
// the front can see the return data as JSON
app.get('/api/robot', (req, res) => {
  // in the `future` this will come from a database instead of being
  // hardcoded
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
