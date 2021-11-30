const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    HOST: process.env.DATABASE_HOST,
    USER: process.env.DATABASE_USERNAME,
    PASSWORD: process.env.DATABASE_PASSWORD,
    DB: process.env.DATABASE,
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
    pool:{
        max: 5,
        min: 0,
        acquire: 300000,
        idle: 10000
    }
}