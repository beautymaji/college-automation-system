import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/shared/Home";

import StudentDashboard from "./pages/student/Dashboard";
import FacultyDashboard from "./pages/faculty/FacultyDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";

import Attendance from "./pages/student/Attendance";
import TakeAttendance from "./pages/faculty/TakeAttendance";

import ProtectedRoute from "./components/common/ProtectedRoute";
import RoleRoute from "./components/common/RoleRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route
            path="/student"
            element={
              <RoleRoute role="student">
                <StudentDashboard />
              </RoleRoute>
            }
          />
          <Route
            path="/faculty"
            element={
              <RoleRoute role="faculty">
                <FacultyDashboard />
              </RoleRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <RoleRoute role="admin">import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/shared/Home";

import StudentDashboard from "./pages/student/Dashboard";
import FacultyDashboard from "./pages/faculty/FacultyDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";

import ProtectedRoute from "./components/common/ProtectedRoute";
import RoleRoute from "./components/common/RoleRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route
            path="/student"
            element={
              <RoleRoute role="student">
                <StudentDashboard />
              </RoleRoute>
            }
          />
          <Route
            path="/faculty"
            element={
              <RoleRoute role="faculty">
                <FacultyDashboard />
              </RoleRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <RoleRoute role="admin">
                <AdminDashboard />
              </RoleRoute>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
}
                <AdminDashboard />
              </RoleRoute>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
}