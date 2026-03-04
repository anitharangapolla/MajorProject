import { Outlet, NavLink } from "react-router-dom";
import "./adminLayout.css";

function AdminLayout() {
  return (
    <div className="admin-layout">

      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2 className="admin-logo">SmartEdu Admin</h2>

        <nav>
          <NavLink to="/admin" end>
            Dashboard
          </NavLink>

          <NavLink to="/admin/users">
            Users
          </NavLink>

          <NavLink to="/admin/analytics">
            Analytics
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="admin-content">
        <header className="admin-header">
          <h3>Admin Panel</h3>
        </header>

        <div className="admin-page">
          <Outlet />
        </div>
      </div>

    </div>
  );
}

export default AdminLayout;
