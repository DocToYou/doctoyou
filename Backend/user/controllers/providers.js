const { db } = require("../../helper");

const allProviders = async (req, res) => {
  try {
    const doctors = await db.query("CALL get_providers(:provider)", {
      replacements: {
        provider: "Doctor",
      },
    });
    const nurse = await db.query("CALL get_providers(:provider)", {
      replacements: {
        provider: "Nurse",
      },
    });
    const caretaker = await db.query("CALL get_providers(:provider)", {
      replacements: {
        provider: "Caretaker",
      },
    });
    const result = {
      doctors,
      nurse,
      caretaker,
    };
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Database Error!" });
  }
};
const doctors = async (req, res) => {
  try {
    const doctors = await db.query("CALL get_providers(:provider)", {
      replacements: {
        provider: "Doctor",
      },
    });
    // console.log(doctors);
    return res.status(200).json(doctors);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Database Error!" });
  }
};

const nurse = async (req, res) => {
  try {
    const nurse = await db.query("CALL get_providers(:provider)", {
      replacements: {
        provider: "Nurse",
      },
    });
    return res.status(200).json(nurse);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Database Error!" });
  }
};

const caretaker = async (req, res) => {
  try {
    const caretaker = await db.query("CALL get_providers(:provider)", {
      replacements: {
        provider: "Caretaker",
      },
    });
    return res.status(200).json(caretaker);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Database Error!" });
  }
};

module.exports = { allProviders, doctors, nurse, caretaker };
