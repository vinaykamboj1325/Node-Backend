const ResModel = require("../Models/Register");

const {generateToken,jwtAuthMiddleware} = require("../JWTFile/jwt")

const registerAdd = async (req, res) => {
  try {
    const { name, email, password, confirm } = req.body;

    if (!name || !email || !password || !confirm) {
      return res.json({
        status: 400,
        message: "Request body is empty or missing required fields",
      });
    }
    if (password !== confirm) {
      return res.json({
        status: 400,
        message: "Firstly confirm the password",
      });
    }

    const newuser = new ResModel({ name, email, password, confirm });
    await newuser.save();
    const token = generateToken(newuser.email);
    console.log("there is token : ", token);
    res.json({
      status: 200,
      message: "Bus route added successfully",
      token : token,
      data: newuser,
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { registerAdd };





