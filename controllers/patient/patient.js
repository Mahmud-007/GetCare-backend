const {Patient} = require("../../models");

module.exports = {
  async addDetails(req, res) {
    console.log(req.userId);
    console.log("addDetails")
    return await Patient.create({
      ...req.body,
      user_id: req.userId
    })
      .then((Patient) => res.status(200).send(Patient))
      .catch((error) => res.status(400).send(error));
  },
  
};