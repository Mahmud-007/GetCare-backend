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
db.patients = require('./patient.js')(sequelize, DataTypes);
db.medicalHistorys = require('./medicalHistory')(sequelize, DataTypes);
db.appointments = require('./appointment')(sequelize, DataTypes);

db.sequelize.sync({ force : false })
  .then(()=>{
    console.log("re-synced");
  });


//Relations

//users & doctors one to one
db.users.hasOne(db.doctors, {
  foreignKey: 'user_id',
  as: 'Doctors'
});
db.doctors.belongsTo(db.users, {
  foreignKey: 'user_id',
  as: 'User'
});

//users & patients one to one
db.users.hasOne(db.patients, {
  foreignKey: 'user_id'
});

//patients & medicalHistory one to many
db.patients.hasMany(db.medicalHistorys, {
  foreignKey: 'patient_id',
  as: 'MedicalHistory'
});

db.medicalHistorys.belongsTo(db.patients, {
  foreignKey: 'patient_id',
  as: 'Patient'
});


//appointments for
db.doctors.hasOne(db.appointments, {
  foreignKey: 'doctor_id',
  as: 'Docotor'
});

db.patients.hasOne(db.appointments, {
  foreignKey: 'paitent_id',
  as: 'Patient'
});

module.exports = db