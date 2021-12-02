const multer = require('multer')
const path = require('path');
const db = require('../models');

const User = db.users;
const Doctor = db.doctors;
const Patient = db.patients;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif|zip|pdf/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('image');

const findDoctorId = (req, res, next) => {
    let doctor = Doctor.findOne({
        where: {
            user_id: req.userId,
        }
    });
    req.doctorId = doctor.id;
    console.log("doctor id",req.doctorId);
    next();
}

const  findPatientId = async (req, res, next) => {
    console.log("findPatientId called")
    let patient = await Patient.findOne({
        where: {
            user_id : req.userId,
        }
    });
    req.patientId = patient.id;
    console.log("patient: ", patient.id);
    console.log("req.userId",req.userId);
    console.log("patient id",req.patientId);
    next();
}

module.exports ={
    upload,
    findDoctorId,
    findPatientId
}