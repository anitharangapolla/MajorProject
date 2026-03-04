import { useNavigate } from "react-router-dom";
import "./careerRoadmap.css";

function CareerRoadmap() {
  const navigate = useNavigate();

  return (
    <div className="roadmap-wrapper">

      {/* HEADER */}
      <div className="roadmap-header">
        <h1>Your Personalized Career Path</h1>
        <p>
          Goal: <span>Software Developer</span> | Timeline: <span>6 Months</span>
        </p>
      </div>

      {/* AI CONFIDENCE */}
      <div className="confidence-box">
        🤖 AI Confidence Score: <span>92%</span>
      </div>

      {/* ROADMAP PHASES */}

      <div className="phase-card">
        <h3>🚀 Phase 1: Foundations (Month 1-2)</h3>
        <ul>
          <li onClick={() => navigate("/student/courses")}>
            Python Basics
          </li>
          <li onClick={() => navigate("/student/courses")}>
            Git & GitHub
          </li>
          <li onClick={() => navigate("/student/courses")}>
            Problem Solving
          </li>
        </ul>
      </div>

      <div className="phase-card">
        <h3>📊 Phase 2: Core DSA (Month 3-4)</h3>
        <ul>
          <li onClick={() => navigate("/student/courses")}>
            Arrays & Strings
          </li>
          <li onClick={() => navigate("/student/courses")}>
            Recursion
          </li>
          <li onClick={() => navigate("/student/courses")}>
            Linked List
          </li>
        </ul>
      </div>

      <div className="phase-card">
        <h3>🔥 Phase 3: Advanced & Interview Prep (Month 5-6)</h3>
        <ul>
          <li onClick={() => navigate("/student/courses")}>
            Trees & Graphs
          </li>
          <li onClick={() => navigate("/student/courses")}>
            System Design Basics
          </li>
          <li onClick={() => navigate("/student/courses")}>
            Mock Interviews
          </li>
        </ul>
      </div>

    </div>
  );
}

export default CareerRoadmap;