const Appointment = require("../models/Appointment");
const { getLoggedInUser } = require("./userLogin");
//exports.example = () => console.log(userDetails.id);

exports.appointmentDetails = async (req, res) => {
  const ursdetls = getLoggedInUser(); // This contains the details of user who loged in.

  let apointDtls = await Appointment.findOne({
    where: { patient_id: ursdetls.id },
  });
  apointDtls = apointDtls?.get({ plain: true });

  console.log(apointDtls);
};
