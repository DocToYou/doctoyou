const express = require("express");
const router = express.Router();
const userRegister = require("../controllers/userRegister");
const userLogin = require("../controllers/userLogin");
const homePage = require("../controllers/homePage");

router.get("/", homePage.home);
router.post("/register",userRegister.register);
router.post("/login", userLogin.login);
router.post("/verifyOtp", userRegister.verifyOtp);
router.get("/contents", userLogin.authToken, userLogin.contents);

module.exports = router; 