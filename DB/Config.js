const mongoose = require('mongoose');
const dotenv = require('dotenv');

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.Mongoo_URI);
      console.log(`MongoDB Connected: {conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }

  module.exports = connectDB;