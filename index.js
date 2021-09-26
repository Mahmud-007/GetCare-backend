const express = require('express');
const mysqlConnection = require('./Database/Connection');
const app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World');
})

// Database Connection
mysqlConnection;

app.listen(3000);