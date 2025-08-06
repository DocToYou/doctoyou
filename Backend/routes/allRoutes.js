const express = require("express");
const router = express.Router();
const userRegister = require("../controllers/userRegister");
const userLogin = require("../controllers/userLogin");
const homePage = require("../controllers/homePage");

router.get("/", homePage.home);
router.get("/register",homePage.reg)
router.post("/register", userRegister.register);
router.post("/login", userLogin.login);
// router.post("/forgotPassword");
router.post("/verifyOtp", userRegister.verifyOtp);

module.exports = router;
