module.exports =(sequelize, DataTypes)=>{
    const Patient = sequelize.define('Patient',{
        age: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          gender: {
              type: DataTypes.STRING,
              allowNull: false,
            },
          
    });

    return Patient;
}