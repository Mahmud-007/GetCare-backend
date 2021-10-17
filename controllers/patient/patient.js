const {Patient} = require("../../models");
const {PatientHistory} = require("../../models")

module.exports = {
  async addDetails(req, res) {
    return await Patient.create({
      ...req.body,
      user_id: req.userId
    })
      .then((Patient) => res.status(200).send(Patient))
      .catch((error) => res.status(400).send(error));
  },
  
  async medicalHistory(req, res) {
    console.log(req.userId);
    console.log("addDetails")
    return await PatientHistory.create({
      ...req.body,
      user_id: req.userId
    })
      .then((PatientHistory) => res.status(200).send(PatientHistory))
      .catch((error) => res.status(400).send(error));
  },
};