const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const sampContent = [
  {
    username: "Surya",
    title: "Software Developer",
    phone: '9659340023'
  },
  {
    username: "Gowtham",
    title: "AI Engineer",
    phone: '1234567890'
  },
  
];

exports.authToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null)
    return res.status(401).json({ message: "Missing Authenticate Token" });

  jwt.verify(token, process.env.SIGNATURE_TOKEN, (error, user) => {
    if (error) return res.status(403);
    req.user = user;
    // console.log(req.user);
    next();
  });
};

exports.contents = (req, res) => {
  // console.log(req.user.userId);
  res.json(sampContent.filter(content => content.phone === req.user.userId ));
};

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
      if (result.length === 0) {
        return res.status(404).send("User not found");
      }
      const hashedPassword = result[0].Password;
      bcrypt.compare(password, hashedPassword, (error, match) => {
        if (error) {
          // console.log(match)
          console.log(error);
          return res.status(401).send("Invalid credentials");
        }
        if (match) {
          const user = { userId: phone };
          const accessToken = jwt.sign(user, process.env.SIGNATURE_TOKEN);
          console.log("Successfully Logged in!");
          // console.log(match);
          return res.json({
            message: "User login successful!",
            accessToken: accessToken,
          });
        } else {
          return res.json({ message: "Incorrect match" });
        }
      });
    }
  );
};
