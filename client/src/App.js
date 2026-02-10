import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import ViewStudent from "./pages/ViewStudent";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {

   const isLogin = localStorage.getItem("admin");

  return (
    <BrowserRouter>

      {/* Show navbar only after admin login */}
      {isLogin && <Navbar />}

      <Routes>

        {/* Default page = Login */}
        <Route path="/" element={<Login />} />

        {/* Main CRUD page after login */}
        <Route
          path="/students"
          element={isLogin ? <Students /> : <Navigate to="/" />}
        />

        <Route
          path="/add"
          element={isLogin ? <AddStudent /> : <Navigate to="/" />}
        />

        <Route
          path="/edit/:id"
          element={isLogin ? <EditStudent /> : <Navigate to="/" />}
        />

        <Route
          path="/view/:id"
          element={isLogin ? <ViewStudent /> : <Navigate to="/" />}
        />

        {/* Optional dashboard */}
        <Route
          path="/dashboard"
          element={isLogin ? <Dashboard /> : <Navigate to="/" />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
