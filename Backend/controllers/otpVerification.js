// if (
//   !process.env.TWILIO_ACCOUNT_SID ||
//   !process.env.TWILIO_AUTH_TOKEN ||
//   !process.env.TWILIO_PHONE_NUMBER
// ) {
//   console.error("Twilio credentials are not set in the environment variables.");
//   process.exit(1);
// } else {
//   console.log("Twilio credentials are set.");
//   //console.log(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN, process.env.TWILIO_PHONE_NUMBER)
// }
// const client = require("twilio")(
//   process.env.TWILIO_ACCOUNT_SID,
//   process.env.TWILIO_AUTH_TOKEN
// );

// let digits = "0123456789";
// let otp = "";

// exports.sendOtp = async (req, res) => {
//   const phone = req.body.phone;

//   //four digit OTP generation
//   for (i = 0; i < 4; i++) {
//     otp += digits[Math.floor(Math.random() * 10)];
//   }

//   // Send OTP via SMS using Twilio
//   await client.messages
//     .create({
//       body: `Your OTP for DocToYou is ${otp}`,
//       from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio phone number
//       to: `+91${phone}`, // Phone number in E.164 format
//     })
//     .then((message) => {
//       console.log(`OTP Sent Successfully: ${message.sid}`);
//       res.json({ message: "OTP Sent Successfully!" });
//     })
//     .catch((error) => {
//       console.error("Error sending OTP:", error);
//       res.status(500).json({ message: "Failed to send OTP." });
//     });
// };

// exports.verifyOtp = async (req, res) => {
//   const userOtp = req.body.otp;

//   if (userOtp === otp) {
//     console.log("OTP Verified Successfully!");
//     res.json({ message: "OTP Verified Successfully!" });
//   } else {
//     console.log("Invalid OTP!");
//     res.status(400).json({ message: "Invalid OTP!" });
//   }
// };
