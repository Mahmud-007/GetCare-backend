module.exports =(sequelize, DataTypes)=>{
    const Appointment = sequelize.define('Appointment',{
        time: {
            type: DataTypes.STRING,
            allowNull: false,
        },   
    })

    return Appointment;
}