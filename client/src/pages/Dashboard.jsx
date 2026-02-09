import { useEffect, useState } from "react";
import axios from "axios";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export default function Dashboard() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/students/all")
      .then(res => setStudents(res.data));
  }, []);

  const total = students.length;

  const avgAttendance =
    students.reduce((a, b) => a + Number(b.attendance || 0), 0) / (total || 1);

  const avgMarks =
    students.reduce(
      (a, b) => a + Number(b.subjects?.[0]?.marks || 0),
      0
    ) / (total || 1);

  const chartData = {
    labels: students.map(s => s.name),
    datasets: [
      {
        label: "Marks",
        data: students.map(s =>
          Number(s.subjects?.[0]?.marks || 0)
        ),
        backgroundColor: "#6C63FF"
      }
    ]
  };

  return (
    <div style={page}>

      {/* HEADER */}
      <div style={header}>
        <h1>🎓 Student Performance Dashboard</h1>
        <p>Real-time analytics of academic progress</p>
      </div>


      {/* STAT CARDS */}
      <div style={grid}>

        <div style={card}>
          <h3>Total Students</h3>
          <h1>{total}</h1>
        </div>

        <div style={card}>
          <h3>Average Marks</h3>
          <h1>{avgMarks.toFixed(1)}</h1>
        </div>

        <div style={card}>
          <h3>Attendance</h3>
          <h1>{avgAttendance.toFixed(1)}%</h1>
        </div>

      </div>


      {/* CHART */}
      <div style={box}>
        <h3>Marks Overview</h3>
        <Bar data={chartData} />
      </div>


      {/* RECENT TABLE */}
      <div style={box}>

        <h3>Recent Students</h3>

        <table style={table}>

          <tr style={{ background: "#eee" }}>
            <th>Name</th>
            <th>Class</th>
            <th>Attendance</th>
            <th>Marks</th>
          </tr>

          {students.slice(0, 6).map(s => (
            <tr key={s._id} style={row}>
              <td>{s.name}</td>
              <td>{s.class}</td>
              <td>{s.attendance}%</td>
              <td>{s.subjects?.[0]?.marks || 0}</td>
            </tr>
          ))}

        </table>

      </div>

    </div>
  );
}


/* -------- STYLES -------- */

const page = {
  minHeight: "90vh",
  padding: 25,
  background: "linear-gradient(120deg,#f0f2ff,#ffffff)"
};

const header = {
  background: "linear-gradient(120deg,#6C63FF,#3F3D9E)",
  color: "white",
  padding: 20,
  borderRadius: 12,
  marginBottom: 20
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: 15
};

const card = {
  background: "white",
  padding: 20,
  borderRadius: 12,
  textAlign: "center",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  transition: "0.3s",
  cursor: "pointer"
};

const box = {
  marginTop: 20,
  background: "white",
  padding: 20,
  borderRadius: 12,
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
};

const table = {
  width: "100%",
  marginTop: 10,
  borderCollapse: "collapse"
};

const row = {
  textAlign: "center"
};