// implement your API here

// 4. import express and cors
const express = require('express');
const cors = require('cors');

const port = 3300;

// bringing in model so we can talk to the db
const db = require('./data/db');

// 5. instantiate express app
const app = express ();

// 6.  plug cors & express.json middleware
app.use(cors())
app.use(express.json())

// 7. create a 'catch all' endpoint
// GET request
app.get('*', handleDefaultRequest)
function handleDefaultRequest(req, res) {
  res.json('hello world')
}

app.listen(3300, () => console.log(`API listening on port ${port}`));