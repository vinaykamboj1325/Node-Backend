const { Schema, model } = require("mongoose");

const RegisterSchema = new Schema({
  name: {
    type: String,
    required: true,  // Fixed typo: require -> required
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirm: {
    type: String,
    required: true,
  },
});

const RegisterModel = model('register', RegisterSchema);  // Ensure consistent naming

module.exports = RegisterModel;
