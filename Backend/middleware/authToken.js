const jwt = require("jsonwebtoken");

const authToken = (req, res, next) => {
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

module.exports = authToken;
