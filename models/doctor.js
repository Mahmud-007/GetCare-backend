module.exports =(sequelize, DataTypes)=>{
    const Doctor = sequelize.define('Doctor',{
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