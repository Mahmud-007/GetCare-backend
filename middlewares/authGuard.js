const jwt = require('jsonwebtoken');
const db = require('../models');

const Doctor = db.doctors;
const Patient = db.patients;

module.exports =(req, res, next)=>{
    const {authorization} = req.headers;
    const token = authorization
    console.log(token,"token")
    req.token = token;
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET); 
        req.username = decoded.name;
        req.userId = decoded.id;  
        console.log("user id",req.userId); 
        next();
    }catch(err){
        //next(err);
        console.error(err);
    }
}
