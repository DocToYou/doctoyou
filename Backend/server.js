const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
//const db = require('./database'); // Import the database connection pool

// Create an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());
// Middleware to enable CORS
app.use(cors());

// Define a simple route to test the server
app.use("/", (req, res) => {
  res.send("Hello, World! The server is running.");
});
// listen on a specific port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
