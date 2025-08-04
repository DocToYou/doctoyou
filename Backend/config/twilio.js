// Backend/config/twilio.js
if (
  !process.env.TWILIO_ACCOUNT_SID ||
  !process.env.TWILIO_AUTH_TOKEN ||
  !process.env.TWILIO_PHONE_NUMBER
) {
  console.error("Twilio credentials are not set in the environment variables.");
  process.exit(1);
} else {
  console.log("Twilio credentials are set.");
}
const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN,
);

module.exports = client;
