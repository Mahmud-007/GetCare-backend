'use strict';
module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  Patient.associate = function(models) {
    // associations can be defined here
  };
  return Patient;
};