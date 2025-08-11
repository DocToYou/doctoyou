const { where } = require("sequelize");
const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const client = require("../config/twilio");
const generateOtp = require("../utils/sendOtp");

// Map to store OTPs: phone => otp
const otpMap = new Map();

exports.sendOtp = async (req, res) => {
  const phone = parseInt(req.body.phone);

  await User.findOne({
    attributes: ["phone"],
    where: {
      phone: phone,
    },
  })
    .then(async (result) => {
      if (!result)
        return res.status(500).json({ message: "DB Error!", result: result });
      //   console.log(result);

      if (result !== null) {
        // Generate 4-digit OTP
        const otp = generateOtp();

        // Save OTP mapped to phone in otpMap object
        otpMap.set(phone, {
          otp,
        });

        // Send OTP via SMS
        try {
            // const message = await client.messages.create({
            //   body: `Your OTP for DocToYou is ${otp}`,
            //   from: process.env.TWILIO_PHONE_NUMBER,
            //   to: `+91${phone}`,
            // });
            // console.log(`OTP sent: ${message.sid}`);
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
      return res.status(500).json({ message: "Error in Server" });
    });
};

exports.verifyOtpFP = async (req, res) => {
  const phone = parseInt(req.body.phone);
  const userOtp = req.body.otp;

  const entry = otpMap.get(phone);
  // console.log(entry);
  if (!entry) {
    return res.status(400).json({ message: "OTP not sent or expired!" });
  }

  const { otp } = entry;

  if (userOtp === otp) {
    return res.status(200).json({ message: "Enter a New Password" });
  } else {
    return res.status(400).json({ message: "Invalid OTP!" });
  }
};

exports.changePassword = async (req, res) => {
  const newPassword = req.body.newPassword;
  const phone = parseInt(req.body.phone);

  const newHashPassword = await bcrypt.hash(newPassword, 8);
  await User.update({ password: newHashPassword }, { where: { phone: phone } })
    .then(result => {
      console.log(result); // if result success, it'll return 1 or 0 if fails
    // console.dir(result, { depth: null });
      res.status(200).json({ message: "Password reset sucessfully!" });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Internal server error!" });
    });
};
