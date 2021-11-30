const db = require('../../models');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = db.users;

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
        
        req.token = token;
        res.header.authorization = token;
        // it't needed to test rest api
        // in the forntend it is handled by headers authorization
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
  logout(req,res){
    try{
      res.clearCookie(process.env.COOKIE_NAME);
      res.json({
          success:true,
      })
    }
    catch(error){
        console.log(error);
    }
}
};