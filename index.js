const express = require('express');
const mysqlConnection = require('./Database/connection');
const path = require("path");
const cookieParser = require('cookie-parser');
const dotenv = require("dotenv");

//internal imports
const  {errorHandler, notFoundHandler} = require("./middlewares/common/errorHandler");
const loginRouter = require("./Routers/loginRouter");

const app = express();
dotenv.config();
 

// Database Connection
mysqlConnection

// Request Parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Cookie parser
app.use(cookieParser(process.env.COOKIE_SECRET));

// Routing
app.use('/api',loginRouter);

// Error Handleing
app.use(notFoundHandler);
app.use(errorHandler);


// App Listening
app.listen(process.env.PORT, ()=>{
  console.log(`app listening to port ${process.env.PORT}`);
});