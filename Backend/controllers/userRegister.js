const bcrypt = require("bcryptjs");
const db = require("../config/db");
const client = require("../config/twilio");

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

  db.query(
    "SELECT phone FROM users WHERE phone = ?",
    [phone],
    async (error, result) => {
      if (error) return res.status(500).json({ message: "DB Error!" });

      if (result.length > 0) {
        return res.status(409).json({ message: "User Already Registered!" });
      }

      // Generate 4-digit OTP
      const digits = "0123456789";
      let otp = "";
      for (let i = 0; i < 4; i++) {
        otp += digits[Math.floor(Math.random() * 10)];
      }

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
        res.json({ message: "OTP Sent Successfully!" });
      } catch (err) {
        console.error("Error sending OTP:", err);
        res.status(500).json({ message: "Failed to send OTP." });
      }
    },
  );
};

// Verifying OTP
exports.verifyOtp = async (req, res) => {
  const phone = req.body.phone;
  const userOtp = req.body.otp;

  const entry = otpMap.get(phone);
  if (!entry) {
    return res.status(400).json({ message: "OTP not sent or expired!" });
  }

  const { otp, userData } = entry;

  if (userOtp === otp) {
    db.query(
      "INSERT INTO users (fname, lname, email, gender, phone, password) VALUES (?, ?, ?, ?, ?, ?)",
      [
        userData.fname,
        userData.lname,
        userData.email,
        userData.gender,
        userData.phone,
        userData.password,
      ],
      (error) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: "Database error!" });
        } else {
          otpMap.delete(phone);
          return res
            .status(200)
            .json({ message: "User Registration Success!" });
        }
      },
    );
  } else {
    return res.status(400).json({ message: "Invalid OTP!" });
  }
};
