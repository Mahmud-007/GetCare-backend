const express = require("express");
const router = express.Router();
const appointment = require("../controllers/appointment/appointment");
const authGuard = require("../middlewares/authGuard");
const common = require("../controllers/common")

router.post('/doctor/appointment', 
            authGuard,
            common.findDoctorId,
            appointment.createAppointment);

  
module.exports = router;