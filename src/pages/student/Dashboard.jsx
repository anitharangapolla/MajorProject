import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    current_skills: "",
    experience_level: "",
    preferred_platform: "",
    weekly_hours_available: "",
    target_timeline_months: "",
    goal_type: "job_ready"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   try {
  //     // Prepare payload (structure ready for backend later)
  //     const payload = {
  //       current_skills: formData.current_skills
  //         .split(",")
  //         .map(skill => skill.trim()),

  //       experience_level: formData.experience_level,
  //       preferred_platform: formData.preferred_platform,
  //       weekly_hours_available: Number(formData.weekly_hours_available),
  //       target_timeline_months: Number(formData.target_timeline_months),
  //       goal_type: formData.goal_type
  //     };

  //     console.log("Generated Payload:", payload);

  //     // 🔥 TEMPORARY STATIC ROADMAP (Replace with backend later)
  //     const mockRoadmap = {
  //       goal: "Full Stack Developer",
  //       timeline: `${payload.target_timeline_months} Months`,
  //       confidence_score: 91,
  //       phases: [
  //         {
  //           phase: "Foundation",
  //           duration: "Month 1-2",
  //           topics: ["HTML", "CSS", "JavaScript Basics", "Git & GitHub"]
  //         },
  //         {
  //           phase: "Frontend Development",
  //           duration: "Month 3-4",
  //           topics: ["React.js", "State Management", "API Integration"]
  //         },
  //         {
  //           phase: "Backend Development",
  //           duration: "Month 5-6",
  //           topics: ["Node.js", "Express.js", "MongoDB", "Authentication"]
  //         }
  //       ]
  //     };

  //     // Save roadmap temporarily
  //     localStorage.setItem("careerPaths", JSON.stringify(mockRoadmap));

  //     setShowModal(false);

  //     // Navigate to roadmap page
  //     navigate("/student/roadmap");

  //   } catch (error) {
  //     console.error(error);
  //     alert("Failed to generate career path.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const payload = {
      current_skills: formData.current_skills
        .split(",")
        .map(skill => skill.trim()),

      experience_level: formData.experience_level,
      preferred_platform: formData.preferred_platform,
      weekly_hours_available: Number(formData.weekly_hours_available),
      target_timeline_months: Number(formData.target_timeline_months),
      goal_type: formData.goal_type
    };

    const token = localStorage.getItem("token");

    const response = await axios.post(
      "http://localhost:5000/api/course",
      { data: payload },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }
    );

    const data = response.data;

    localStorage.setItem("careerPaths", JSON.stringify(data));

    setShowModal(false);

    navigate("/student/roadmap");

  } catch (error) {
    console.error("ERROR:", error.response?.data || error.message);
    alert("Failed to generate career path.");
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="dashboard-home">

      {/* HERO SECTION */}
      <div className="hero-section">
        <div className="hero-card">

          <h1>
            Discover Your <span>AI Career Path</span>
          </h1>

          <p className="hero-sub">
            Get personalized career recommendations, skill gap analysis,
            structured learning paths, and resume generation.
          </p>

          <div className="hero-steps">
            <div className="step-item">✓ Enter your interests & skills</div>
            <div className="step-item">✓ AI analyzes career fit</div>
            <div className="step-item">✓ Get structured learning roadmap</div>
          </div>

          <button
            className="primary-btn large"
            onClick={() => setShowModal(true)}
          >
            Get Started Free
          </button>

        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="course-modal-overlay">
          <div className="course-modal">

            <h3>Tell Us About Your Skills</h3>

            <form onSubmit={handleSubmit}>

              <input
                name="current_skills"
                placeholder="Skills (comma separated e.g. Python, React)"
                onChange={handleChange}
                required
              />

              <select
                name="experience_level"
                onChange={handleChange}
                required
              >
                <option value="">Select Experience Level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>

              <input
                name="preferred_platform"
                placeholder="Preferred Platform (e.g. Web, AI, Cloud)"
                onChange={handleChange}
                required
              />

              <input
                type="number"
                name="weekly_hours_available"
                placeholder="Weekly Hours Available"
                onChange={handleChange}
                required
              />

              <input
                type="number"
                name="target_timeline_months"
                placeholder="Target Timeline (Months)"
                onChange={handleChange}
                required
              />

              <select
                name="goal_type"
                onChange={handleChange}
                defaultValue="job_ready"
              >
                <option value="job_ready">Job Ready</option>
                <option value="internship">Internship</option>
                <option value="skill_upgrade">Skill Upgrade</option>
              </select>

              <button
                type="submit"
                className="course-submit-btn"
                disabled={loading}
              >
                {loading ? "Generating..." : "Generate Career Path"}
              </button>

            </form>

            <span
              className="course-close"
              onClick={() => setShowModal(false)}
            >
              ✕
            </span>

          </div>
        </div>
      )}

    </div>
  );
}

export default Dashboard;




// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./dashboard.css";

// function Dashboard() {
//   const navigate = useNavigate();

//   const [showModal, setShowModal] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     current_skills: "",
//     experience_level: "",
//     preferred_platform: "",
//     weekly_hours_available: "",
//     target_timeline_months: "",
//     goal_type: "job_ready"
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const payload = {
//         current_skills: formData.current_skills
//           .split(",")
//           .map(skill => skill.trim()),

//         experience_level: formData.experience_level,
//         preferred_platform: formData.preferred_platform,
//         weekly_hours_available: Number(formData.weekly_hours_available),
//         target_timeline_months: Number(formData.target_timeline_months),
//         goal_type: formData.goal_type
//       };

//       const response = await fetch(
//         "http://127.0.0.1:8000/discover-paths",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify(payload)
//         }
//       );

//       if (!response.ok) {
//         throw new Error("AI request failed");
//       }

//       const data = await response.json();

//       // Save AI response
//       localStorage.setItem("careerPaths", JSON.stringify(data));

//       setShowModal(false);

//       navigate("/student/courses");

//     } catch (error) {
//       console.error(error);
//       alert("Failed to generate career paths.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="dashboard-home">

//       <div className="hero-section">
//         <div className="hero-card">

//           <h1>
//             Discover Your <span>AI Career Path</span>
//           </h1>

//         <p className="hero-sub">
//             Get personalized career recommendations, skill gap analysis,
//             structured learning paths, and resume generation.
//           </p>

//           <div className="hero-steps">
//             <div className="step-item">✓ Enter your interests & skills</div>
//             <div className="step-item">✓ AI analyzes career fit</div>
//             <div className="step-item">✓ Get structured learning roadmap</div>
//           </div>

//           <button
//             className="primary-btn large"
//             onClick={() => setShowModal(true)}
//           >
//             Get Started Free
//           </button>

//         </div>
//       </div>

//       {showModal && (
//         <div className="course-modal-overlay">
//           <div className="course-modal">

//             <h3>Tell Us About Your Skills</h3>

//             <form onSubmit={handleSubmit}>

//               <input
//                 name="current_skills"
//                 placeholder="Skills (comma separated e.g. Python, React)"
//                 onChange={handleChange}
//                 required
//               />

//               <select
//                 name="experience_level"
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select Experience Level</option>
//                 <option value="beginner">Beginner</option>
//                 <option value="intermediate">Intermediate</option>
//                 <option value="advanced">Advanced</option>
//               </select>

//               <input
//                 name="preferred_platform"
//                 placeholder="Preferred Platform (e.g. Web, AI, Cloud)"
//                 onChange={handleChange}
//                 required
//               />

//               <input
//                 type="number"
//                 name="weekly_hours_available"
//                 placeholder="Weekly Hours Available"
//                 onChange={handleChange}
//                 required
//               />

//               <input
//                 type="number"
//                 name="target_timeline_months"
//                 placeholder="Target Timeline (Months)"
//                 onChange={handleChange}
//                 required
//               />

//               <select
//                 name="goal_type"
//                 onChange={handleChange}
//                 defaultValue="job_ready"
//               >
//                 <option value="job_ready">Job Ready</option>
//                 <option value="internship">Internship</option>
//                 <option value="skill_upgrade">Skill Upgrade</option>
//               </select>

//               <button
//                 type="submit"
//                 className="course-submit-btn"
//                 disabled={loading}
//               >
//                 {loading ? "Generating..." : "Generate Career Path"}
//               </button>

//             </form>

//             <span
//               className="course-close"
//               onClick={() => setShowModal(false)}
//             >
//               ✕
//             </span>

//           </div>
//         </div>
//       )}

//     </div>
//   );
// }

// export default Dashboard;