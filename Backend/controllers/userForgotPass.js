const { where } = require("sequelize");
const User = require("../models/Users");

if (
  !process.env.TWILIO_ACCOUNT_SID ||
  !process.env.TWILIO_AUTH_TOKEN ||
  !process.env.TWILIO_PHONE_NUMBER
) {
  console.error("Twilio credentials are not set in the environment variables.");
  process.exit(1);
} else {
  console.log("Twilio credentials are set.");
  //console.log(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN, process.env.TWILIO_PHONE_NUMBER)
}
const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

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
      // console.log(result);

      if (result === null) {
        // Generate 4-digit OTP
        const digits = "0123456789";
        var otp = "";
        for (let i = 0; i < 4; i++) {
          otp += digits[Math.floor(Math.random() * 10)];
        }

        // Save OTP mapped to phone in otpMap object
        otpMap.set(phone, {
          otp,
        });

        // Send OTP via SMS
        try {
          const message = await client.messages.create({
            body: `Your OTP for DocToYou is ${otp}`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: `+91${phone}`,
          });
          console.log(`OTP sent: ${message.sid}`);
          res.status(200).json({ message: "OTP Sent Successfully!" });
        //   console.log(otp);
        //   console.log(otpMap.get(phone));
        } catch (err) {
          console.error("Error sending OTP:", err);
          res.status(500).json({ message: "Failed to send OTP." });
        }
      }
    })
    .catch((error) => {
      console.log(`Error while fetching: ${error.message}`);
    });
};

exports.verifyOtp = async (req, res) => {
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

  await User.update(
    { password: await bcrypt.hash(newPassword, 8) },
    { where: { phone: phone } }
  )
    .then((result) => {
      console.log(result.values());
      res.status(200).json({ message: "Password reset sucessfully!" });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Internal server error!" });
    });
};
