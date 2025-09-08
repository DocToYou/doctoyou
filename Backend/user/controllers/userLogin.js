const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/Users");

let loggedInUser = null;

exports.getLoggedInUser = () => loggedInUser; // function to access it outside

const sampContent = [
  {
    username: "Surya",
    title: "Software Developer",
    phone: "9659340023",
  },
  {
    username: "Gowtham",
    title: "AI Engineer",
    phone: "1234567890",
  },
];

exports.authToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null)
    return res.status(401).json({ message: "Missing Authenticate Token" });

  jwt.verify(token, process.env.SIGNATURE_TOKEN, (error, user) => {
    if (error) return res.status(403).json({ message: "Token Mismatch!" });
    req.user = user;
    // console.log(req.user);
    next();
  });
};

exports.contents = (req, res) => {
  // console.log(req.user.userId);
  res
    .status(200)
    .json(sampContent.filter((content) => content.phone === req.user.userId));
};

exports.login = async (req, res) => {
  const phone = req.body.phone;
  const password = req.body.password;

  //login logic here
  if (!phone || !password) {
    return res.status(403).json({ message: "Phone/Password field missing!" });
  }
  // User.findOne({ where: {phone: phone}}).then(result => {console.log('User found: ', result.toJSON())})
  await User.findOne({
    attributes: ["password"],
    where: { phone: phone },
  })
    .then((result) => {
      // console.log(user.toJSON());

      if (result.length === 0) {
        return res.status(404).send("User not found");
      }
      // console.log(result.password);
      const hashedPassword = result.password;
      bcrypt.compare(password, hashedPassword, async (error, match) => {
        if (error) {
          // console.log(match)
          console.log(error);
          return res.status(401).send("Invalid credentials");
        }
        if (match) {
          const user = { userId: phone };
          const accessToken = jwt.sign(user, process.env.SIGNATURE_TOKEN);
          console.log("Successfully Logged in!");
          //Getting user information
          let userDetails = await User.findOne({
            where: { phone: phone },
          });
          loggedInUser = userDetails?.get({ plain: true });
          //jjjconsole.log(loggedInUser);

          // console.log(match);
          return res.json({
            message: "User login successful!",
            accessToken: accessToken,
          });
          // return res.json({ message: "User login successful!" });
        } else {
          return res.status(401).json({ message: "Incorrect match" });
        }
      });
    })
    .catch((err) => {
      console.log(err.message);
      return res.status(500).json({ message: "Server error occured!" });
    });
};
