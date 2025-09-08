const express = require("express");
const router = express.Router();
const userRegister = require("../user/controllers/userRegister");
const userLogin = require("../user/controllers/userLogin");
const homePage = require("../user/controllers/homePage");
const userForgotPass = require("../user/controllers/userForgotPass");
const userApointmnt = require("../user/controllers/userApointmnt");

// Home Page
router.get("/", homePage.home);

// User side OTP Verification, Register and Login
router.post("/register", userRegister.register);
router.post("/login", userLogin.login);
// router.post("/forgotPassword");
router.post("/verifyOtp", userRegister.verifyOtp);

router.get("/appointment",userApointmnt.appointmentDetails);
//(req,res)=>{res.send({"app":1})})

// User page with contents by JWT Authentication Middleware
router.get("/contents", userLogin.authToken, userLogin.contents);

// User forgot passsword functionality => OTP Verification, Validation and Change Password
router.post("/sendOtp", userForgotPass.sendOtp);
router.post("/verifyOtpFP", userForgotPass.verifyOtpFP);
router.post("/changePassword", userForgotPass.changePassword);

module.exports = router;
