import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: String,
  class: String,

  subjects: [
    {
      subject: String,
      marks: Number
    }
  ],

  attendance: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Student", studentSchema);