const jwt = require('jsonwebtoken');

const authGuard =(req, res, next)=>{
    
    const token = req.cookies.access_token;
    console.log(`cookie: ${token}`);
    console.log('in auth guard')
    try{
        // const token = tokenCookie.split('=')[1];
        // //console.log(token);
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        //console(decoded);
        // req.name = decoded.name;
        // req.id = decoded.id;
        next();
    }catch(err){
        next(err);
        console.error(err);
    }
}
module.exports = authGuard;