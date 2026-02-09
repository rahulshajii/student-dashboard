import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Import Routes
import studentRoute from "./routes/student.js";
import authRoute from "./routes/auth.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: "*",
  methods: ["GET","POST","PUT","DELETE"],
  credentials: true
}));

app.use(express.json());

// Routes
app.use("/students", studentRoute);
app.use("/auth", authRoute);

// Test Route
app.get("/", (req, res) => {
  res.send("Student Performance Backend Running");
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ Mongo Error:", err));

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});