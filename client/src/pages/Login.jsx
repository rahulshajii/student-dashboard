import { useState } from "react";
import axios from "axios";

export default function Login() {

  const [data, setData] = useState({});

  const change = e =>
    setData({ ...data, [e.target.name]: e.target.value });

  const submit = async () => {

    const res = await axios.post(
      "http://localhost:5000/auth/login",
      data
    );

    if (res.data.msg === "success") {

      localStorage.setItem("admin", "true");
      localStorage.setItem("user", res.data.username);

      window.location = "/dashboard";

    } else {
      alert("Invalid Admin Login");
    }
  };

  return (

    <div style={page}>

      {/* LEFT IMAGE SECTION */}
      <div style={left}>
        <h1 style={{ color: "white" }}>Student Portal</h1>
        <p style={{ color: "#ddd" }}>
          Manage students • Attendance • Performance
        </p>
      </div>


      {/* LOGIN CARD */}
      <div style={right}>

        <div style={card}>

          <h2 style={{ marginBottom: 20 }}>Admin Login</h2>

          <input
            name="username"
            placeholder="Username"
            style={input}
            onChange={change}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            style={input}
            onChange={change}
          />

          <button style={btn} onClick={submit}>
            Login
          </button>

        </div>

      </div>

    </div>
  );
}


/* ---------- STYLES ---------- */

const page = {
  display: "flex",
  height: "100vh",
  background: "linear-gradient(120deg,#1e1e2f,#3a3a5c)"
};

const left = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage:
    "url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1)",
  backgroundSize: "cover",
  backgroundPosition: "center"
};

const right = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const card = {
  background: "rgba(255,255,255,0.1)",
  backdropFilter: "blur(10px)",
  padding: 30,
  borderRadius: 12,
  width: "70%",
  maxWidth: 350,
  color: "white",
  boxShadow: "0 0 20px rgba(0,0,0,0.2)"
};

const input = {
  width: "100%",
  padding: 10,
  marginBottom: 15,
  borderRadius: 6,
  border: "none",
  outline: "none"
};

const btn = {
  width: "100%",
  padding: 10,
  background: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: 6,
  cursor: "pointer"
};