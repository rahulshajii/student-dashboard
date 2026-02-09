import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String   // "admin" or "student"
});

export default mongoose.model("User", userSchema);