const bcrypt = require("bcryptjs");
const { twilio, sendOtp } = require("../../helper");
const User = require("../models/Users");
const client = twilio;
const generateOtp = sendOtp;
// const otpVerification = require("./otpVerification"); // Import OTP verification controller

// console.log("Connecting to database with the above details:");

// Map to store OTPs: phone => otp
const otpMap = new Map();

exports.register = async (req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const gender =
    req.body.gender === "Male" ? "M" : req.body.gender === "Female" ? "F" : "O";
  const phone = parseInt(req.body.phone);
  const password = req.body.password;
  // const confirmPassword = req.body.confirmPassword;

  // Querying DB to check whether the user already exists
  await User.findOne({
    attributes: ["phone"],
    where: {
      phone: phone,
    },
  })
    .then(async (result) => {
      if (result !== null) {
        // console.log(result);

        return res.status(409).json({ message: "User Already Registered!" });
      }
      if (result === null) {
        // Generate 4-digit OTP
        const otp = generateOtp();

        // Save OTP mapped to phone in otpMap object
        otpMap.set(phone, {
          otp,
          userData: {
            fname,
            lname,
            email,
            gender,
            phone,
            password: await bcrypt.hash(password, 8),
          },
        });

        // Send OTP via SMS
        try {
          const message = await client.messages.create({
            body: `Your OTP for DocToYou is ${otp}`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: `+91${phone}`,
          });
          console.log(`OTP sent: ${message.sid}`);
          // console.log(otp);
          console.log(otpMap.get(phone));
          return res.status(200).json({ message: "OTP Sent Successfully!" });
        } catch (err) {
          console.error("Error sending OTP:", err);
          return res.status(500).json({ message: "Failed to send OTP." });
        }
      }
    })
    .catch((error) => {
      console.log(`Error while fetching: ${error.message}`);
      return res.status(500).json({ message: "Database Error!" });
    });
};

// Verifying OTP
exports.verifyOtp = async (req, res) => {
  const phone = parseInt(req.body.phone);
  const userOtp = req.body.otp;

  const entry = otpMap.get(phone);
  // console.log(entry);
  if (!entry) {
    return res.status(400).json({ message: "OTP not sent or expired!" });
  }

  const { otp, userData } = entry;

  if (userOtp === otp) {
    await User.create({
      fname: userData.fname,
      lname: userData.lname,
      email: userData.email,
      gender: userData.gender,
      phone: userData.phone,
      password: userData.password,
    }).then((result) => {
      if (result) {
        console.log("Successfully registered a new User!");
        otpMap.delete(phone);
        return res.status(200).json({ message: "User Registration Success!" });
      }
    });
  } else {
    return res.status(400).json({ message: "Invalid OTP!" });
  }
};
