const express = require('express');
const {sequelize} = require('./models');

const cookieParser = require('cookie-parser');
const dotenv = require("dotenv");


//internal imports
const  {errorHandler, notFoundHandler} = require("./middlewares/errorHandler");
const userRouter = require("./Routers/userRouter");
const doctorRouter = require("./Routers/doctorRouter");
const patientRouter = require("./Routers/patientRouter");


const app = express();
dotenv.config();

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
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

// Routing
app.use('/api', userRouter, 
                doctorRouter,
                patientRouter
        );

// Error Handleing
app.use(notFoundHandler);
app.use(errorHandler);

// App Listening and database Connection
app.listen(process.env.PORT, () => {
  console.log(`app listening to port ${process.env.PORT}`);
  try {
    (async()=>{
      await sequelize.authenticate({force: true});
      console.log('Database Connected.');
    })().catch((error)=>{
      console.log(error);
    });
  } catch (error) {
   console.error('Unable to connect to the database:', error);
  }
});