const express = require("express");
const router = express.Router();

const common = require("../controllers/common")
const patient = require("../controllers/patient/patient");
const authGuard = require("../middlewares/authGuard");


router.post('/patient/add-details',authGuard,patient.addDetails);
router.post('/patient/medical-history',
            authGuard,
            common.findPatientId,
            patient.medicalHistory
            );
router.get('/patient/get-medical-history',
            authGuard,
            common.findPatientId,
            patient.getPatientMedicalHistory);
  
module.exports = router;