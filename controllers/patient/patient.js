const db = require('../../models');

const Patient = db.patients;

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
    console.log(req.userId);
    console.log("addDetails")
    return await PatientHistory.create({
      images:req.fils.path,
      ...req.body,
      user_id: req.userId
    })
      .then((PatientHistory) => res.status(200).send(PatientHistory))
      .catch((error) => res.status(400).send(error));
  },
};