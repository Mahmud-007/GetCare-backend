const jwt = require('jsonwebtoken');

module.exports =(req, res, next)=>{
    const {authorization} = req.headers;
    const token = authorization;
    console.log(token,"token")
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET); 
        req.username = decoded.name;
        req.userId = decoded.id;
        next();
    }catch(err){
        //next(err);
        console.error(err);
    }
}
