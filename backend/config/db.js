const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/tasknestDB";

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
