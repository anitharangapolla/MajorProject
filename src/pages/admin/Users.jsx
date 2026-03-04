import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🔵 Mock backend JSON
    const mockUsers = [
      {
        id: 1,
        name: "Anitha",
        email: "anitha@email.com",
        role: "Student",
        progress: 72,
        status: "Active"
      },
      {
        id: 2,
        name: "Rahul",
        email: "rahul@email.com",
        role: "Student",
        progress: 45,
        status: "Active"
      },
      {
        id: 3,
        name: "AdminUser",
        email: "admin@email.com",
        role: "Admin",
        progress: "-",
        status: "Active"
      }
    ];

    setTimeout(() => {
      setUsers(mockUsers);
      setLoading(false);
    }, 700);
  }, []);

  if (loading) return <p>Loading users...</p>;

  return (
    <div>
      <h2 style={{ marginBottom: "30px" }}>User Management 👥</h2>

      <div className="users-table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Progress</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.progress}</td>
                <td>
                  <span
                    className={
                      user.status === "Active"
                        ? "status-active"
                        : "status-inactive"
                    }
                  >
                    {user.status}
                  </span>
                </td>
                <td>
                  <button className="view-btn">View</button>
                  <button className="disable-btn">Disable</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
