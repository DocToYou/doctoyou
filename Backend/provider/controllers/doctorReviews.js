const Reviews = require("../models/Reviews");
const User = require("../../user/models/Users");

exports.reviews = async (req, res) => {
  const provider_id = req.body.provider_id;
  const details = await Reviews.findAll({
    attributes: ["id", "rating", "comment", "created_at", "patient_id"],
    where: {
      provider_id: provider_id,
    },
  });
  if (!details || details.length === 0) {
    return res.status(404).json({ message: "No Reviews about this doctor!" });
  }
  if (details) {
    // console.log(details);
    for (let i = 0; i < details.length; i++) {
      const userReview = await User.findOne({
        attributes: ["fname", "lname"],
        where: {
          id: details[i].dataValues["patient_id"],
        },
      });
      // console.log(userReview.dataValues)
      // console.log(details[i].dataValues)
      details[i].dataValues["fname"] = userReview.dataValues["fname"];
      details[i].dataValues["lname"] = userReview.dataValues["lname"];
    }

    // details.forEach(async (patients) => {
    //   console.log(patients.dataValues['id']);
    //   console.log(details[1])
    //   console.log(userReview);
    //   details.forEach( async (reviews, index) => {
    //     console.log(reviews)
    //     reviews.dataValues['fname'] = userReview[index].dataValues['fname']
    //     reviews.dataValues['lname'] = userReview[index].dataValues['lname']
    //   })
    // console.log(userReview)
    // console.log(patients.dataValues)
    // console.log(userReview.length);
    //   for (let i = 0; i < userReview.length; i++) {
    //     // patients.dataValues["fname"] = userReview[i].dataValues["fname"];
    //     // patients.dataValues["lname"] = userReview[i].dataValues["lname"];
    //     console.log(userReview[i].dataValues["fname"]);
    //     console.log(userReview[i].dataValues["lname"]);
    //   }
    // });
    // console.log(details);
    return res.status(200).json(details);
  }
};
