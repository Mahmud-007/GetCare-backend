'use strict';
module.exports = (sequelize, DataTypes) => {
  const Doctor = sequelize.define('Doctor', {
    license: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    board_certification: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    timing: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    schedule: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Doctor.associate = function(models) {
    // associations can be defined here
  };
  return Doctor;
};