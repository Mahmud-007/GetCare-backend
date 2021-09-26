const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const mysqlConnection = mysql.createConnection({
    host : process.env.DATABASE_HOST,
    user : process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE,
    multipleStatements : true
});
 
mysqlConnection.connect((error)=>{
    if (error){
        console.log(error.message);
    }
    else {
        console.log("Database Connected");
    }
});

module.exports = mysqlConnection;