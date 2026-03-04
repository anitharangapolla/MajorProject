import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

/* Public pages */
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

/* Student pages */
import StudentDashboard from "./pages/student/StudentDashboard"; // Layout
import Dashboard from "./pages/student/Dashboard";               // Home content
import CareerRoadmap from "./pages/student/CareerRoadmap";
import Progress from "./pages/student/Progress";
import Jobs from "./pages/student/Jobs";
import Resume from "./pages/student/Resume";
import Courses from "./pages/student/Courses";

/* Admin pages */
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Users from "./pages/admin/Users";
import Analytics from "./pages/admin/Analytics";

function App() {
  return (
    <Routes>

      {/* ================= PUBLIC ROUTES ================= */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* ================= STUDENT ROUTES ================= */}
      <Route
        path="/student"
        element={
          <ProtectedRoute role="student">
            <StudentDashboard />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="courses" element={<Courses />} />
        <Route path="/student/roadmap" element={<CareerRoadmap />} />
        <Route path="progress" element={<Progress />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="resume" element={<Resume />} />
      </Route>

      {/* ================= ADMIN ROUTES ================= */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="analytics" element={<Analytics />} />
      </Route>

    </Routes>
  );
}

export default App;