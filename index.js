const express = require('express');
const databaseConnection = require('./models/index');
const path = require("path");
const cookieParser = require('cookie-parser');
const dotenv = require("dotenv");

//internal imports
const  {errorHandler, notFoundHandler} = require("./middlewares/common/errorHandler");
const loginRouter = require("./Routers/loginRouter");

const app = express();
dotenv.config();
 

// Database Connection
databaseConnection

// Request Parser
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// Cookie Parser
app.use(cookieParser(process.env.COOKIE_SECRET));

// Routing
app.use('/api',loginRouter);

// Error Handleing
app.use(notFoundHandler);
app.use(errorHandler);

// App Listening
app.listen(process.env.PORT, () => {
  console.log(`app listening to port ${process.env.PORT}`);
});