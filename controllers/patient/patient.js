const db = require('../../models');

const Patient = db.patients;
const MedicalHistory = db.medicalHistorys;

module.exports = {
  //add patient details
  async addDetails(req, res) {
    return await Patient.create({
      ...req.body,
      user_id: req.userId
    })
      .then((Patient) => res.status(200).send(Patient))
      .catch((error) => res.status(400).send(error));
  },
  
  //add medical history of a patient
  async medicalHistory(req, res) {
    console.log(req.body);
    return await MedicalHistory.create({
      //images:req.file.path,
      //...req.body,
      images: req.body.image,
      date: req.body.time,
      description: req.body.shortDescription,
      patient_id: req.patientId 
    })
      .then((MedicalHistory) => res.status(200).json(MedicalHistory))
      .catch((error) => res.status(400).send(error));
  },

  async getPatientMedicalHistory(req,res){
    try{
      return MedicalHistory.findAll({
        where: {
          patient_id : req.patientId
      }
      })
        .then((medicalHistories) => res.status(200).send(medicalHistories))
        .catch((error) => res.status(400).send(error));
    }catch(err){
        console.error(err);
  }
  }
};