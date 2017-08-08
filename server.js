const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser')

const app = express();
// tell our to use mustahce
app.engine('mst', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mst');
// define a public folder
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend:false}))

// Creating a route for my website
app.get('/', (req, res) => {
  res.render('index',allRobots[1]);
});

// This array is only for demostration purposes
// in the `future` this would a database
const allRobots = [
  {
    id:1,
    name: 'R2-D2',
    colors: ['blue', 'white'],
    languages: 'beep-boop'
  },{
    id:2,
    name: 'R4',
    colors: ['gold', 'green', 'white']
  },
  {
    id:3,
    name: 'BB-8',
    colors: ['orange', 'white']
  },
  {
    id:4,
   name: 'C3-PO',
   colors: ['gold', 'silver', 'red'],
   languages: 'yes'
 }
];
// Creating an endpoint for my API
// this endpoint is where the back end
// meets the front end
// the front can see this url (/api/robot)
// the front can see the return data as JSON
app.get('/api/robots/:id', (req, res) => {
  const robotId = parseInt(req.params.id)
  // go my "database"
  const myRobot = allRobots.find(bot => {
    return bot.id === robotId
  })
  // this is how we retrun JSON from an endpoint
  res.json(myRobot);
});

// RESTFUL - GET all robots
app.get('/api/robots', (req, res) => {
  res.json(allRobots);
});
// // NOT RESTUL endpoints DONT DO THIS!!!!!!
// app.post('/api/get/robots/all', (req, res) => {
//   const allRobots = [
//     {
//       name: 'R4',
//       colors: ['gold', 'green', 'white']
//     },
//     {
//       name: 'BB-8',
//       colors: ['orange', 'white']
//     }
//   ];
//   res.json(allRobots);
// })
// RESTful endpoints Are going here

// CREATE a robot
app.post('/api/robots', (req, res)=> {
  // get data from the body
  let newRobot = {
    id: allRobots.length +1, // NOTE: the new ID will be handled by the database
    name:req.body.name,
    colors:req.body.colors,
    languages:req.body.languages
  }
  // add to our "database"
  allRobots.push(newRobot)
  // return something
  res.json(newRobot)
});
// GET a robots colors

// UPdate a robot
// delete a robot




app.listen(3000, () => {
  console.log('We are rocking on 3000');
});
