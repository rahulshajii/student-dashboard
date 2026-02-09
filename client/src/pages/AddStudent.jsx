import { useState } from "react";
import { addStudent } from "./api";

export default function AddStudent() {

  const [form, setForm] = useState({
    name: "",
    class: "",
    attendance: "",
    subject: "",
    marks: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {

    const data = {
      name: form.name,
      class: form.class,
      attendance: Number(form.attendance),

      subjects: [
        {
          subject: form.subject,
          marks: Number(form.marks)
        }
      ]
    };

    await addStudent(data);

    alert("Student Added Successfully!");
    window.location = "/students";
  };

  return (

    <div style={page}>

      <div style={card}>

        <h2 style={{ textAlign: "center", marginBottom: 20 }}>
          ➕ Add New Student
        </h2>

        <input
          name="name"
          placeholder="Student Name"
          style={input}
          onChange={handleChange}
        />

        <input
          name="class"
          placeholder="Class"
          style={input}
          onChange={handleChange}
        />

        <input
          name="attendance"
          placeholder="Attendance %"
          style={input}
          onChange={handleChange}
        />

        <input
          name="subject"
          placeholder="Subject Name"
          style={input}
          onChange={handleChange}
        />

        <input
          name="marks"
          placeholder="Marks"
          style={input}
          onChange={handleChange}
        />

        <button style={btn} onClick={submit}>
          Save Student
        </button>

      </div>

    </div>
  );
}


/* ---------- STYLES ---------- */

const page = {
  height: "90vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  backgroundImage:
    "url(https://images.unsplash.com/photo-1509062522246-3755977927d7)",
  backgroundSize: "cover",
  backgroundPosition: "center"
};

const card = {
  background: "rgba(255,255,255,0.15)",
  backdropFilter: "blur(10px)",
  padding: 30,
  borderRadius: 12,
  width: "90%",
  maxWidth: 400,
  boxShadow: "0 0 20px rgba(0,0,0,0.2)"
};

const input = {
  width: "100%",
  padding: 10,
  marginBottom: 12,
  borderRadius: 6,
  border: "none",
  outline: "none"
};

const btn = {
  width: "100%",
  padding: 10,
  background: "#6C63FF",
  color: "white",
  border: "none",
  borderRadius: 6,
  cursor: "pointer",
  fontWeight: "bold"
};