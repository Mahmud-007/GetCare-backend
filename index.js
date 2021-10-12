const express = require('express');
const databaseConnection = require('./models/index');
const path = require("path");
const cookieParser = require('cookie-parser');
const dotenv = require("dotenv");
const bodyParser = require('body-parser');

//internal imports
const  {errorHandler, notFoundHandler} = require("./middlewares/errorHandler");
const userAuthenticate = require("./Routers/user");

const app = express();
dotenv.config();
 

// Database Connection
databaseConnection

// Request Parser
app.use(express.json());
app.use(express.urlencoded({extended : false}));


// Cookie Parser
app.use(cookieParser(process.env.COOKIE_SECRET));

// config express middlewares
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


// Routing
app.use('/api',userAuthenticate);

// Error Handleing
app.use(notFoundHandler);
app.use(errorHandler);

// App Listening
app.listen(process.env.PORT, () => {
  console.log(`app listening to port ${process.env.PORT}`);
});