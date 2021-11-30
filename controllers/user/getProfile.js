const db = require('../../models');

const User = db.users;

module.exports = (req, res, next)=>{
    console.log(`user data: ${req.UserId}`);
    try{
        return User.findOne({
            where: {
                id: req.userId
            }
        })
      .then((user) => res.status(200).send(user))
      .catch((error) => res.status(400).send(error));
    }catch(err){
        console.error(err);
    }
}

