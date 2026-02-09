import { Link } from "react-router-dom";

export default function Navbar() {

  const logout = () => {
    localStorage.clear();
    window.location = "/";
  };

  return (
    <div style={{ display: "flex", gap: 10, padding: 10 }}>

      <Link to="/dashboard">Dashboard</Link>
      <Link to="/students">Students</Link>
      <Link to="/add">Add Student</Link>

      <button onClick={logout}>Logout</button>

    </div>
  );
}