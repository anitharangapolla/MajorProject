import "../styles/modal.css";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function AuthModal({ type, onClose, switchMode }) {
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "student",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // ================= VALIDATION =================
  const validate = () => {
    if (!form.email || !form.password) {
      return "Email and password are required";
    }

    if (type === "signup" && !form.username) {
      return "Username is required";
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(form.email)) {
      return "Invalid email format";
    }

    if (form.password.length < 6) {
      return "Password must be at least 6 characters";
    }

    return null;
  };

  // ================= SUBMIT =================
  const handleSubmit = async () => {
    setError("");

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);

      let user;

      if (type === "login") {
        user = await login({
          email: form.email,
          password: form.password,
        });
      } else {
        user = await signup(form);
      }

      onClose();

      // Redirect based on role
      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/student");
      }

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{type === "login" ? "Login" : "Sign Up"}</h2>

        {error && <p className="error">{error}</p>}

        {type === "signup" && (
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) =>
              setForm({ ...form, username: e.target.value })
            }
          />
        )}

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        {type === "signup" && (
          <select
            className="role-select"
            value={form.role}
            onChange={(e) =>
              setForm({ ...form, role: e.target.value })
            }
          >
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
        )}

        <button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Please wait..." : type === "login" ? "Login" : "Create Account"}
        </button>

        <p className="switch-text">
          {type === "login" ? (
            <>
              Don’t have an account?{" "}
              <span onClick={() => switchMode("signup")}>
                Sign up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span onClick={() => switchMode("login")}>
                Login
              </span>
            </>
          )}
        </p>

        <span className="close" onClick={onClose}>
          ×
        </span>
      </div>
    </div>
  );
}

export default AuthModal;