module.exports =(sequelize, DataTypes)=>{
    const MedicalHistory = sequelize.define('MedicalHistory',{
        images: {
            type: DataTypes.STRING,
        },
        date: {
            type: DataTypes.STRING,
          },
        description: {
            type: DataTypes.STRING,
        },  
    })

    return MedicalHistory;
}