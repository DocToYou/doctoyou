const express = require("express");
const providerRouter = express.Router();
const doctorReviews = require("../provider/controllers/doctorReviews");

providerRouter.get("/reviews", doctorReviews.reviews);

module.exports = providerRouter;
