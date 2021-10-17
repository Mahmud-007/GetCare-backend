const {User} = require("../../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  async signup(req, res) {
      //res.send("body");
    return await User.create({
      name: req.body.name,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password,10),
    })
      .then((user) => res.status(200).send(user))
      .catch((error) => res.status(400).send(error));
  },
  async login(req, res) {
    const myPlaintextPassword = req.body.password;
    try{
        var user = await User.findOne({
            where: {
                email: req.body.email,
            }
        });
    }catch(error) {
        console.error(error)
    }
    const result = await bcrypt.compare(myPlaintextPassword, user.password);
    if (result) {
        const token = jwt.sign({ 
            name: user.name, 
            id: user.id, 
        },process.env.JWT_SECRET,{
            expiresIn: '100h'
        });
        user.token = token
        res.cookie(process.env.COOKIE_NAME, token,
            {
            maxAge:8400000,
            sign: true
            }
                );
        res.status(200).json({
            "message": "Successfully Login",
            "access_token": token
        });
    }else{
        res.status(400).send("Authentication Error");
    }
  },
};