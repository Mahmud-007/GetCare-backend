const dbConfig = require('../config/dbConfig');
const {Sequelize,DataTypes} = require('sequelize');

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,{
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  }
  );

  sequelize.authenticate()
    .then(()=>{
      console.log("Database Connected");
    }).catch(error=>{
      console.log(error);
    })

    const db = {}

    db.sequelize = Sequelize;
    db.sequelize = sequelize;

    db.users = require('./user.js')(sequelize, DataTypes);
    db.doctors = require('./doctor.js')(sequelize, DataTypes);

    db.sequelize.sync({ force : false})
    .then(()=>{
      console.log("re-synced");
    });


//Relations
db.users.hasOne(db.doctors, {
  foreignKey: 'user_id'
});


    module.exports = db