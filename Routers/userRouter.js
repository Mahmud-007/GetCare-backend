const express = require("express");
const router = express.Router();
const userAuthenticate = require("../controllers/user/userAuthenticate");
const getUsers = require("../controllers/user/getUsers");
const getProfile = require("../controllers/user/getUsers");
const authGuard = require("../middlewares/authGuard");

router.get('/users', authGuard, getUsers);
router.get('/profile', authGuard, getProfile);
router.post('/login', userAuthenticate.login);
router.post('/signup', userAuthenticate.signup);

  
module.exports = router;