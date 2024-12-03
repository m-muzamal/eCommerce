import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URL);
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};
