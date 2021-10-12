const jwt = require('jsonwebtoken');

const authGuard =(req, res, next)=>{
    const {authorization} = req.headers;
    try{
        const token = authorization;
        console.log("token ",req.headers);
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.name = decoded.name;
        req.id = decoded.id;
        next();
    }catch(err){
        console.error(err);
    }
}
module.exports = authGuard;