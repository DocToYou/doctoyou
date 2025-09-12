const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const db = require("./config/db"); // Import the database connection pool
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const providerRoutes = require("./routes/providerRoutes");
const app = express();

//CORS
app.use(cors({ origin: "http://localhost:5173" }));

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to enable CORS
app.use(cors());

//Sync all models (It'll create table if not exists)
db.sync()
  .then(() => {
    console.log("********** Database Synced Successfully! *************");
  })
  .catch((error) => {
    console.log(`********** Error while syncing: *********\n${error.message}`);
  });

//Add all user routes
app.use("/user", userRoutes);

// Add all doctor routes
app.use("/provider", providerRoutes);

module.exports = app;
