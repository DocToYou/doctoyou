const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const db = require("../config/db");

exports.register = async (req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const gender = req.body.gender==="Male" ? 'M' : 'F';
  const phone = parseInt(req.body.phone);
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  db.query(
    "select phone from users where phone=?",
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
      let hashedPassword = await bcrypt.hash(password, 8);
      db.query(
        "insert into users values (?,?,?,?,?,?)",
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