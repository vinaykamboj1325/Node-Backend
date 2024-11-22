const RegisterModel = require("../Models/Register");

const UserAdd = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({
      status: 401,
      message: "Email & password not found", // Corrected typo: "pasword" -> "password"
    });
  }

  try {
    const user = await RegisterModel.findOne({ email: email });

    if (!user) { // Corrected to compare password properly
      return res.json({ status: 401, message: "Email & password not found" });
    } else {
      return res.json({ status: 200, message: "User found" });
    }
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

module.exports = { UserAdd };
