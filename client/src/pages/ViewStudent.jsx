import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneStudent } from "./api";

export default function ViewStudent() {

  const { id } = useParams();
  const [s, setS] = useState({});

  useEffect(() => {
    getOneStudent(id).then(res => setS(res.data));
  }, [id]);

  return (

    <div style={page}>

      <div style={card}>

        <h2 style={{ textAlign: "center", marginBottom: 20 }}>
          👨‍🎓 Student Details
        </h2>

        <div style={row}>
          <b>Name:</b> {s.name}
        </div>

        <div style={row}>
          <b>Class:</b> {s.class}
        </div>

        <div style={row}>
          <b>Attendance:</b> {s.attendance}%
        </div>

        <h4 style={{ marginTop: 15 }}>📚 Subjects</h4>

        {s.subjects?.map((sub, i) => (
          <div key={i} style={subBox}>
            {sub.subject} – {sub.marks}
          </div>
        ))}

        <button
          style={btn}
          onClick={() => window.history.back()}
        >
          ← Back
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
"url(https://images.unsplash.com/photo-1555066931-4365d14bab8c)",
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
  boxShadow: "0 0 20px rgba(0,0,0,0.2)",
  color: "white"
};

const row = {
  padding: "6px 0"
};

const subBox = {
  background: "rgba(0,0,0,0.2)",
  padding: 8,
  borderRadius: 6,
  marginTop: 6
};

const btn = {
  width: "100%",
  padding: 10,
  marginTop: 15,
  background: "#6C63FF",
  color: "white",
  border: "none",
  borderRadius: 6,
  cursor: "pointer"
};