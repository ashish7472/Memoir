const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/daybook";
    await mongoose.connect(MONGO_URI, {});
    console.log("MongoDB connected!");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // stop the server if DB fails
  }
};

module.exports = connectDB;