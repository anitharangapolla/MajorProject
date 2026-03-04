import { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import AuthModal from "../components/AuthModal";
import "../styles/landing.css";
import heroImg from "../assets/hero.jpg";

function Landing() {
  const [modalType, setModalType] = useState(null);

  const [featurePopup, setFeaturePopup] = useState(false);
  const featuresRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <Navbar
      onLogin={() => setModalType("login")}
      onSignup={() => setModalType("signup")}
      onAbout={() => scrollToSection(featuresRef)}
      onFeatures={() => setFeaturePopup(true)}
      onContact={() => scrollToSection(contactRef)}
    />

      {/* HERO */}
      <section className="hero">
  <div className="container hero-container">
    <div className="hero-right">
      <h1 className="hero-title">
        AI-Powered <span>Career Intelligence</span>
      </h1>

      <p className="hero-subtext">
        Discover your ideal career path with intelligent skill gap analysis,
        adaptive learning roadmaps and real-time assessments.
      </p>

      <div className="hero-buttons">
        <button
          className="btn-primary"
          onClick={() => setModalType("signup")}
        >
          Get Started Free
        </button>

        <button
          className="btn-secondary"
          onClick={() => scrollToSection(featuresRef)}
        >
          Learn More
        </button>
      </div>
    </div>

    <div className="hero-left">
  <div className="hero-image-wrapper">
    <img src={heroImg} alt="AI Career" />
  </div>
</div>
  </div>
</section>
      {/* HOW IT WORKS */}
      <section className="section how-it-works" ref={featuresRef}>
  <div className="container">
    <h2 className="section-title">How It Works</h2>

    <div className="steps">
      {[
        "Enter your skills & goals",
        "AI analyzes skill gaps",
        "Generate personalized roadmap",
        "Track progress & get job-ready"
      ].map((text, index) => (
        <div className="step-card" key={index}>
          <div className="step-number">0{index + 1}</div>
          <p>{text}</p>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* CONTACT */}
     <section className="section contact" ref={contactRef}>
  <div className="container contact-box">
    <div className="contact-left">
      <h2>Let’s Build Your Future Career</h2>
      <p>
        Reach out to us for partnerships, institutional access,
        or product inquiries.
      </p>
    </div>

    <form className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required></textarea>
      <button className="btn-primary" type="submit">
        Send Message
      </button>
    </form>
  </div>
</section>

{featurePopup && (
  <div className="feature-overlay">
    <div className="feature-popup">
      <h2>Explore Advanced Features</h2>
      <p>
        Unlock personalized roadmaps, AI assessments,
        and career insights by creating an account.
      </p>

      <div className="popup-buttons">
        <button
          className="btn-primary"
          onClick={() => {
            setFeaturePopup(false);
            setModalType("signup");
          }}
        >
          Sign Up
        </button>

        <button
          className="btn-secondary"
          onClick={() => {
            setFeaturePopup(false);
            setModalType("login");
          }}
        >
          Login
        </button>
      </div>

      <button
        className="popup-close"
        onClick={() => setFeaturePopup(false)}
      >
        ✕
      </button>
    </div>
  </div>
)}

      <footer className="footer">
  <div className="container footer-container">

    <div className="footer-brand">
      <h3>Smart<span>Edu</span></h3>
      <p>
        AI-powered multi-agent career guidance and
        personalized learning path platform.
      </p>
    </div>

    <div className="footer-links">
      <div>
        <h4>Product</h4>
        <a href="#">Features</a>
        <a href="#">Roadmaps</a>
        <a href="#">Assessments</a>
      </div>

      <div>
        <h4>Company</h4>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Careers</a>
      </div>

      <div>
        <h4>Resources</h4>
        <a href="#">Blog</a>
        <a href="#">Help Center</a>
        <a href="#">Privacy Policy</a>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    © 2026 SmartEdu • AI Career Guidance Platform
  </div>
</footer>

      {modalType && (
        <AuthModal
          type={modalType}
          onClose={() => setModalType(null)}
          switchMode={(mode) => setModalType(mode)}
        />
      )}
    </>
  );
}

export default Landing;