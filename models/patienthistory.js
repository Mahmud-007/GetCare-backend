'use strict';
module.exports = (sequelize, DataTypes) => {
  const PatientHistory = sequelize.define('PatientHistory', {
    illness: DataTypes.STRING,
    date_of_illness: DataTypes.STRING,
    reports: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  PatientHistory.associate = function(models) {
    // associations can be defined here
  };
  return PatientHistory;
};