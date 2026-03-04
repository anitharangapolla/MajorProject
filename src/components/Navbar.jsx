import "../styles/navbar.css";

function Navbar({ onLogin, onSignup, onAbout, onFeatures, onContact }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="logo">
          Smart<span>Edu</span>
        </div>

        {/* Menu */}
        <div className="nav-links">
          <button onClick={onAbout}>About</button>
          <button onClick={onFeatures}>Features</button>
          <button onClick={onContact}>Contact</button>
        </div>

        {/* Auth Buttons */}
        <div className="nav-auth">
          <button className="login-btn" onClick={onLogin}>
            Login
          </button>
          <button className="signup-btn" onClick={onSignup}>
            Get Started
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;