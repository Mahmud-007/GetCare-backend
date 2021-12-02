const express = require("express");
const router = express.Router();
const doctor = require("../controllers/doctor/doctor");
const authGuard = require("../middlewares/authGuard");

router.post('/doctor/apply', authGuard, doctor.apply);
router.get('/doctors', authGuard, doctor.getDoctors);
  
module.exports = router;