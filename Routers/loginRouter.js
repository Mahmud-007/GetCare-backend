const express = require("express");
const router = express.Router();
const loginController = require("../controllers/user/loginController");

router.get('/login', loginController);

module.exports = router;