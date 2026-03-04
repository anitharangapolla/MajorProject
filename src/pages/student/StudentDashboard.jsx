import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./studentDashboard.css";

function StudentDashboard() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  const closeProfile = () => {
    setShowProfile(false);
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="dashboard-wrapper">

      {/* ================= NAVBAR ================= */}
      <header className="dashboard-navbar">

        {/* BRAND */}
        <div className="brand" onClick={() => navigate("/student")}>
          <div className="brand-logo">P</div>
          <div className="brand-text">
            Placement<span>AI</span>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav className="nav-links">
          <NavLink to="/student" end>HOME</NavLink>
          <NavLink to="/student/courses">COURSES</NavLink>
          <NavLink to="/student/progress">PROGRESS</NavLink>
          <NavLink to="/student/jobs">JOBS</NavLink>
          <NavLink to="/student/resume">RESUME BUILDER</NavLink>
        </nav>

        {/* PROFILE */}
        <div className="profile-wrapper">
          <div
            className="profile-circle"
            onClick={toggleProfile}
          >
            AR
          </div>

          {showProfile && (
            <div className="profile-dropdown">
              <p className="profile-name">Anitha Rangapolla</p>
              <p className="profile-role">Student</p>
              <hr />

              <button
                className="dropdown-btn"
                onClick={() => {
                  closeProfile();
                  navigate("/student/profile");
                }}
              >
                My Profile
              </button>

              <button
                className="dropdown-btn"
                onClick={() => {
                  closeProfile();
                  navigate("/student/settings");
                }}
              >
                Settings
              </button>

              <button
                className="dropdown-btn logout"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          )}
        </div>

      </header>

      {/* BLUR OVERLAY (click outside closes dropdown) */}
      {showProfile && (
        <div
          className="blur-overlay"
          onClick={closeProfile}
        />
      )}

      {/* ================= BODY ================= */}
      <div className="dashboard-body">

        {/* SIDEBAR */}
        <aside
          className={`dashboard-sidebar ${
            showSidebar ? "" : "hide"
          } ${showProfile ? "blur-active" : ""}`}
        >
          <div className="sidebar-section">
            <p className="section-title">Your Courses</p>

            <div
              className="sidebar-course"
              onClick={() => navigate("/student/courses")}
            >
              JAVA
              <div className="mini-progress">
                <div className="mini-fill" style={{ width: "45%" }} />
              </div>
            </div>

            <div
              className="sidebar-course"
              onClick={() => navigate("/student/courses")}
            >
              DSA
              <div className="mini-progress">
                <div className="mini-fill" style={{ width: "20%" }} />
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main
          className={`dashboard-content ${
            showProfile ? "blur-active" : ""
          }`}
        >
          <Outlet />
        </main>

      </div>
    </div>
  );
}

export default StudentDashboard;