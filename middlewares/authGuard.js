const jwt = require('jsonwebtoken');

module.exports =(req, res, next)=>{
    const token = req.cookies.access_token;
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
