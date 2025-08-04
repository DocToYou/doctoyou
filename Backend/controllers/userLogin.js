const db = require("../config/db");
const bcrypt = require("bcryptjs");


exports.login = async (req, res) => {
  const phone = req.body.phone;
  const password = req.body.password;

  //login logic here
  if (!phone || !password) {
    return res.json({ message: "Phone/Password field missing!" });
  }

  db.query(
    "SELECT Password FROM USERS WHERE phone=?",
    [phone],
    (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error occured" });
      }
      if (result.length === 0){
        return res.status(404).send("User not found")
      }
      const hashedPassword = result[0].Password;
      bcrypt.compare(password, hashedPassword, (error, match) => {
        if (error) {
          // console.log(match)
          console.log(error);
          return res.status(401).send("Invalid credentials")
        }
        if (match) {
          console.log("Successfully Logged in!");
          // console.log(match);
          return res.json({ message: "User login successful!" });
        } else {
          return res.json({ message: "Incorrect match" });
        }
      });
    }
  );
};
