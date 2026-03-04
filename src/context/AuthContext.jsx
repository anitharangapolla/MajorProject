import { createContext, useContext, useState } from "react";
import { useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
const [user, setUser] = useState(() => {
  try {
    const storedUser = localStorage.getItem("user");

    if (!storedUser || storedUser === "undefined") {
      return null;
    }

    return JSON.parse(storedUser);
  } catch {
    return null;
  }
});

const [token, setToken] = useState(() => localStorage.getItem("token"));

  // ================= SIGNUP =================
  const signup = async (data) => {
    const res = await fetch("http://localhost:5000/api/student/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.message || "Signup failed");
    }

    localStorage.setItem("user", JSON.stringify(result.user));
    localStorage.setItem("token", result.token);

    setUser(result.user);
    setToken(result.token);

    return result.user;
  };

  // ================= LOGIN =================
 const login = async (data) => {
  const res = await fetch("http://localhost:5000/api/student/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Login failed");
  }

  localStorage.setItem("user", JSON.stringify(result.user));
  localStorage.setItem("token", result.token);

  setUser(result.user);
  setToken(result.token);

  return result.user;
};
  // ================= LOGOUT =================
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
  };

  // ================= AUTH FETCH HELPER =================
  const authFetch = async (url, options = {}) => {
    const storedToken = localStorage.getItem("token");

    const res = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${storedToken}`,
      },
    });

    return res;
  };

  return (
    <AuthContext.Provider value={{ user, token, signup, login, logout, authFetch }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);