const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./config/db"); // Import the database connection pool
const routes = require("./routes/allRoutes");

const PORT = process.env.PORT || 3000;
// Create an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to enable CORS
app.use(cors());

//Add all routes
app.use("/", routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
