import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneStudent, updateStudent } from "./api";

export default function EditStudent() {

  const { id } = useParams();

  const [form, setForm] = useState({
    name: "",
    class: "",
    attendance: "",
    subjects: []
  });

  const [original, setOriginal] = useState({});

  useEffect(() => {
    getOneStudent(id).then(res => {
      setForm(res.data);
      setOriginal(res.data);
    });
  }, [id]);

  const change = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const changeSubject = (e) => {
    setForm({
      ...form,
      subjects: [
        {
          ...form.subjects?.[0],
          subject: e.target.value
        }
      ]
    });
  };

  const changeMarks = (e) => {
    setForm({
      ...form,
      subjects: [
        {
          ...form.subjects?.[0],
          marks: e.target.value
        }
      ]
    });
  };

  const submit = async () => {

    const data = {
      name: form.name || original.name,
      class: form.class || original.class,
      attendance: form.attendance || original.attendance,
      subjects: form.subjects?.length
        ? form.subjects
        : original.subjects
    };

    await updateStudent(id, data);

    alert("Updated Successfully");
    window.location = "/students";
  };

  return (

    <div style={page}>

      <div style={card}>

        <h2 style={{ textAlign: "center", marginBottom: 20 }}>
          ✏️ Edit Student
        </h2>

        <input
          name="name"
          value={form.name || ""}
          onChange={change}
          placeholder="Name (optional)"
          style={input}
        />

        <input
          name="class"
          value={form.class || ""}
          onChange={change}
          placeholder="Class (optional)"
          style={input}
        />

        <input
          name="attendance"
          value={form.attendance || ""}
          onChange={change}
          placeholder="Attendance (optional)"
          style={input}
        />

        <input
          value={form.subjects?.[0]?.subject || ""}
          onChange={changeSubject}
          placeholder="Subject (optional)"
          style={input}
        />

        <input
          value={form.subjects?.[0]?.marks || ""}
          onChange={changeMarks}
          placeholder="Marks (optional)"
          style={input}
        />

        <button style={btn} onClick={submit}>
          Update Student
        </button>

      </div>

    </div>
  );
}


/* -------- STYLES -------- */

const page = {
  height: "90vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  backgroundImage:
    "url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4)",
  backgroundSize: "cover",
  backgroundPosition: "center"
};

const card = {
  background: "rgba(255,255,255,0.15)",
  backdropFilter: "blur(10px)",
  padding: 30,
  borderRadius: 12,
  width: "90%",
  maxWidth: 420,
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
  background: "#FF6B6B",
  color: "white",
  border: "none",
  borderRadius: 6,
  cursor: "pointer",
  fontWeight: "bold"
};