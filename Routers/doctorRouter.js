const express = require("express");
const router = express.Router();
const doctor = require("../controllers/doctor/doctor");
const authGuard = require("../middlewares/authGuard");

router.post('/doctor/apply',authGuard,doctor.apply);

  
module.exports = router;