const express = require("express");
const userRouter = express.Router();
const userRegister = require("../user/controllers/userRegister");
const userLogin = require("../user/controllers/userLogin");
const homePage = require("../user/controllers/homePage");
const userForgotPass = require("../user/controllers/userForgotPass");
const userApointmnt = require("../user/controllers/userApointmnt");
const authToken = require("../middleware/authToken");
const { allProviders, doctors, nurse, caretaker} = require("../user/controllers/providers");

// Home Page
userRouter.get("/", homePage.home);

// User side OTP Verification, Register and Login
userRouter.post("/register", userRegister.register);
userRouter.post("/login", userLogin.login);
// userRouter.post("/forgotPassword");
userRouter.post("/verifyOtp", userRegister.verifyOtp);

userRouter.get("/appointment", userApointmnt.appointmentDetails);
//(req,res)=>{res.send({"app":1})})

// User page with contents by JWT Authentication Middleware
userRouter.get("/contents", authToken, userLogin.contents);

// User forgot passsword functionality => OTP Verification, Validation and Change Password
userRouter.post("/sendOtp", userForgotPass.sendOtp);
userRouter.post("/verifyOtpFP", userForgotPass.verifyOtpFP);
userRouter.post("/changePassword", userForgotPass.changePassword);

// returns all providers
userRouter.get("/providers", allProviders);

// get specific providers
userRouter.get("/doctors", doctors);
userRouter.get("/nurse", nurse);
userRouter.get("/caretaker", caretaker);

module.exports = userRouter;
