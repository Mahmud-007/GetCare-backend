const {Sequelize, Datatypes} = require('sequelize');
const dotenv = require('dotenv');
const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);

dotenv.config()

const sequelize = new Sequelize(process.env.DATABASE, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
  });

try {
    (async()=>{
      await sequelize.authenticate();
      console.log('Database Connected.');
    })().catch((error)=>{
      console.log(error);
    });
} catch (error) {
   console.error('Unable to connect to the database:', error);
}
const db = {};

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;