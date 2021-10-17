const {Doctor} = require("../../models");

module.exports = {
  async apply(req, res) {
    console.log(req.userId);
    return await Doctor.create({
      ...req.body,
      user_id: req.userId
    })
      .then((Doctor) => res.status(200).send(Doctor))
      .catch((error) => res.status(400).send(error));
  },
  
};