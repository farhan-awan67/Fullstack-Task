import mongoose from "mongoose";
import asyncHandler from "../utils/asyncHandler.js";
import { configDotenv } from "dotenv";
configDotenv();

const connectDB = asyncHandler(async (req, res) => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("DB connected");
});

export default connectDB;
