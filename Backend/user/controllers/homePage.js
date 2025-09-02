// Define a simple route to test the server

exports.home = (req, res) => {
  res.status(200).send("The server is running.");
};

exports.reg = (req, res) => {
  res.send("register page wrking");
};
