module.exports =(sequelize, DataTypes)=>{
    const Doctor = sequelize.define('Doctor',{
      speciality: {
        type: DataTypes.STRING,
        allowNull: false,
      },
        license: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          location: {
              type: DataTypes.STRING,
              allowNull: false,
            },
          timing: {
              type: DataTypes.STRING,
              allowNull: true,
            },
          
    })

    return Doctor;
}