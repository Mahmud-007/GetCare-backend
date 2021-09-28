const express = require("express");
const router = express.Router();
const loginController = require("../Controllers/loginController")

router.get('/login',(req,res)=>{
    res.send("asdf");
});