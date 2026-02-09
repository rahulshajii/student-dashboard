import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json({ msg: "User Created" });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username, password });

  if (!user) {
    return res.json({ msg: "Invalid Login" });
  }

  res.json({
    msg: "success",
    role: user.role,
    username: user.username
  });
});

export default router;   // ← THIS LINE MUST EXIST