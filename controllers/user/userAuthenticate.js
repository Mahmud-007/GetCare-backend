const User = require("../../models").User;
const bcrypt = require("bcrypt");

module.exports = {
  async signup(req, res) {
      console.log(req.body.name);
      console.log(req.body.email);
      console.log(req.body.password);
    return User.create({
      name: req.body.name,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 8),
    })
      .then((user) => res.status(200).send(user))
      .catch((error) => res.status(400).send(error));
  },
  async login(req, res) {
    return User.findAll()
      .then((users) => res.status(200).send(users))
      .catch((error) => res.status(400).send(error));
  },
};