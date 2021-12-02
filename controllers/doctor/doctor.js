const db = require('../../models');

const Doctor = db.doctors;
const Patient = db.patients;

module.exports = {
  async apply(req, res) {
    console.log("userId: ",req.userId);
    return await Doctor.create({
      ...req.body,
      user_id: req.userId
    })
      .then((Doctor) => res.status(200).send(Doctor))
      .catch((error) => res.status(400).send(error));
  },
  async getDoctors(req, res) {
      try{
        return Doctor.findAll({
          
        })
      .then((doctors) => res.status(200).send(doctors))
      .catch((error) => res.status(400).send(error));
    }catch(err){
        console.error(err);
    }
  }
};