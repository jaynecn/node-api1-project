// implement your API here

// 4. import express and cors
const express = require('express');
const cors = require('cors');


// bringing in model so we can talk to the db
const db = require('./data/db');

// 5. instantiate express app
const app = express ();

// 6.  plug cors & express.json middleware
app.use(cors())
app.use(express.json())

// 7. create a 'catch all' endpoint
// GET request
// app.get('*', handleDefaultRequest)
// function handleDefaultRequest(req, res) {
//   res.json('Hiya its Jayne how are you?')
// }

app.get('/api/users', getAllUsers)
app.get('/api/users/:id', getUsersById)

// POST request
app.post('/api/users', createNewUser)



// FUNCTIONS

function createNewUser(req, res) {
  console.log(req);
  db.insert(req.body)
    .then(data => {
      console.log(data);
      res.json(data);
    })
    .catch(error => {
      console.log(error);
      res.json(error);
    })
}

function getAllUsers(req, res) {
  db.find()
    .then(data => {
      console.log(data);
      res.json(data);
      res.status(200).json(data);
      res.status(201).json(data);
      res.status(500).json({ error: "There was an error while saving the user to the database" });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: "The users information could not be retrieved." });
      res.status(400).json({ errorMessage: "Please provide name and bio for the user." })
    });
}

function getUsersById(req, res) {
  db.findById(req.params.id)
  .then(data => {
    console.log(data);
    res.
  })
}

// 8. listen on process.env.PORT || 3300
app.listen(process.env.PORT || 3300, () => {
  console.log('listening on the server with Jayne ' + (process.env.PORT || 3300));
})