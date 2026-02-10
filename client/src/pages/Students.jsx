import { useEffect, useState } from "react";
import axios from "axios";

export default function Students() {

  const [list, setList] = useState([]);

  const loadData = async () => {
    const res = await axios.get("https://student-backend-xud9.onrender.com/students/all");
    setList(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteStudent = async (id) => {
    if (!window.confirm("Are you sure to delete?")) return;

    await axios.delete("https://student-backend-xud9.onrender.com/students/delete/" + id);
    alert("Deleted Successfully");
    loadData();
  };

  return (

    <div style={page}>

      <div style={card}>

        <div style={topBar}>
          <h2>👨‍🎓 Students Management</h2>

          <button
            style={addBtn}
            onClick={() => window.location = "/add"}
          >
            ➕ Add Student
          </button>
        </div>


        <table style={table}>

          <thead>
            <tr style={headRow}>
              <th>Name</th>
              <th>Class</th>
              <th>Attendance</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {list.map((s) => (
              <tr key={s._id} style={row}>

                <td>{s.name}</td>
                <td>{s.class}</td>
                <td>{s.attendance || 0}%</td>

                <td>

                  <button
                    style={viewBtn}
                    onClick={() => window.location = `/view/${s._id}`}
                  >
                    View
                  </button>

                  <button
                    style={editBtn}
                    onClick={() => window.location = `/edit/${s._id}`}
                  >
                    Edit
                  </button>

                  <button
                    style={delBtn}
                    onClick={() => deleteStudent(s._id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}


/* -------- STYLES -------- */

const page = {
  minHeight: "90vh",
  padding: 20,

  backgroundImage:
  "url(https://images.unsplash.com/photo-1516979187457-637abb4f9353)",
  backgroundSize: "cover",
  backgroundPosition: "center"
};

const card = {
  background: "rgba(255,255,255,0.15)",
  backdropFilter: "blur(10px)",
  padding: 20,
  borderRadius: 12,
  boxShadow: "0 0 20px rgba(0,0,0,0.2)"
};

const topBar = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 15,
  color: "white"
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
  background: "white",
  borderRadius: 10,
  overflow: "hidden"
};

const headRow = {
  background: "#6C63FF",
  color: "white"
};

const row = {
  textAlign: "center"
};

const addBtn = {
  padding: "8px 12px",
  background: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: 6,
  cursor: "pointer"
};

const viewBtn = {
  marginRight: 5,
  padding: "6px 10px",
  background: "#2196F3",
  color: "white",
  border: "none",
  borderRadius: 6
};

const editBtn = {
  marginRight: 5,
  padding: "6px 10px",
  background: "#FF9800",
  color: "white",
  border: "none",
  borderRadius: 6
};

const delBtn = {
  padding: "6px 10px",
  background: "#F44336",
  color: "white",
  border: "none",
  borderRadius: 6
};
