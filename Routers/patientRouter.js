const express = require("express");
const router = express.Router();

const patient = require("../controllers/patient/patient");
const authGuard = require("../middlewares/authGuard");

router.post('/patient/add-details',authGuard,patient.addDetails);
router.post('/patient/medical-history',authGuard,patient.medicalHistory);
  
module.exports = router;