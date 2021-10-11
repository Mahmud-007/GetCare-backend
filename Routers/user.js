const express = require("express");
const router = express.Router();
const userAuthenticate = require("../controllers/user/userAuthenticate");
const getUsers = require("../controllers/user/getUsers");


router.get('/users', getUsers);
router.get('/login', userAuthenticate.login);
router.post('/signup', userAuthenticate.signup);

module.exports = router;