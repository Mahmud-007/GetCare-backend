const db = require('../../models');

const User = db.users;

module.exports = (req, res, next)=>{
    try{
        return User.findAll()
      .then((users) => res.status(200).send(users))
      .catch((error) => res.status(400).send(error));
    }catch(err){
        console.error(err);
    }
}

