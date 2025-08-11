const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/allRoutes");
const app = express();

//CORS
app.use(cors({ origin: "http://localhost:5174" }));

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

//Add all routes
app.use("/", routes);

module.exports = app;