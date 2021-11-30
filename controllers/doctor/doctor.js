const db = require('../../models');

const Doctor = db.doctors;

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
  
};