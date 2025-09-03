const db = require("../config/db");
const twilio = require("../config/twilio");
const sendOtp = require("../utils/sendOtp");

module.exports = { db,twilio,sendOtp };