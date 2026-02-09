import express from "express";
import Student from "../models/Student.js";

const router = express.Router();

// CREATE
router.post("/add", async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.json({ msg: "Student Added" });
});

// READ ALL
router.get("/all", async (req, res) => {
  const data = await Student.find();
  res.json(data);
});

// READ ONE
router.get("/:id", async (req, res) => {
  const data = await Student.findById(req.params.id);
  res.json(data);
});

// UPDATE
router.put("/update/:id", async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, req.body);
  res.json({ msg: "Updated" });
});

// DELETE
router.delete("/delete/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

export default router;