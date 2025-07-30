const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const otpVerification = require("./otpVerification"); // Import OTP verification controller

const db = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  timezone: "Z", // Set timezone to UTC
});

console.log("Connecting to database with the above details:");

exports.register = async (req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const gender = req.body.gender==="Male" ? 'M' : 'F';
  const phone = parseInt(req.body.phone);
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  db.query(
    "select phone from user where phone=?",
    [phone],
    async (error, result) => {
      if (error) {
        console.log(error);
      }
      if (result.length > 0) {
        // return res.render("register", { message: "Email id Already taken!" }); -- used handlebars to render the html for register page
        // console.log(result);
        return res.json({ message: "User Already Registered!" });
      } else if (password !== confirmPassword) {
        // return res.render("register", { message: "Password doesn't match!" }); -- used handlebars to render the html for register page
        return res.json({ message: "Password doesn't match with Confirm Password!" });
      }

      // Generate OTP and send it via SMS
      await otpVerification.sendOtp(req, res);
      // Verify OTP
      await otpVerification.verifyOtp(req, res);
      
      let hashedPassword = await bcrypt.hash(password, 8);
      db.query(
        "insert into user values (?,?,?,?,?,?)",
        [fname, lname, gender, phone, email, hashedPassword],
        (error, result) => {
          if (error) {
            console.log(error);
          } else {
            console.log(result);
            // return res.render("register", { message: "User Registration Success!"});
            return res.json({ message: "User Registration Success!"});
          }
        }
      );
    }
  );
};