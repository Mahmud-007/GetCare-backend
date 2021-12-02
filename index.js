const express = require('express');
const databaseConnection = require('./models/index');
const path = require("path");
const cookieParser = require('cookie-parser');
const dotenv = require("dotenv");
const cors = require('cors');

//internal imports
const  {errorHandler, notFoundHandler} = require("./middlewares/errorHandler");
const userRouter = require("./Routers/userRouter");
const doctorRouter = require("./Routers/doctorRouter");
const patientRouter = require("./Routers/patientRouter");


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

// CORS Headers
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, PATCH, DELETE'
	);
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Content-Type, Authorization'
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

// static Images
app.use('/Images', express.static('./Images'));

//second edition
//middlewares
let corsOptions = {
  origin: 'https://localhost:3000',
}

//middlewares
app.use(cors(corsOptions));
// app.use(express.json());

// app.use(express.urlencoded({ extended: true }));

// App Listening
app.listen(process.env.PORT, () => {
  console.log(`app listening to port ${process.env.PORT}`);
});