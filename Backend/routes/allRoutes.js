const express = require("express");
const router = express.Router();
const userRegister = require("../controllers/userRegister");
const userLogin = require("../controllers/userLogin");
const homePage = require("../controllers/homePage");
const otpVerification = require("../controllers/otpVerification");

router.get("/", homePage.home);
router.post("/register",userRegister.register);
router.post("/login", userLogin.login);
router.post("/sendOtp", otpVerification.sendOtp);
router.post("/verifyOtp", otpVerification.verifyOtp);

module.exports = router;