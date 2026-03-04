function Resume() {
  return (
    <div className="resume-page">

      <h2>Your AI Resume</h2>

      <div className="resume-container">

        <div className="resume-header">
          <h3>Anitha Rangapolla</h3>
          <p>Full Stack Developer</p>
        </div>

        <div className="resume-section">
          <h4>Skills</h4>
          <ul className="skills-list">
            <li>React</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Python</li>
            <li>Machine Learning</li>
          </ul>
        </div>

        <div className="resume-section">
          <h4>Projects</h4>
          <p>AI Career Guidance Platform (MERN + GenAI)</p>
        </div>

        <button className="download-btn">Download Resume</button>

      </div>

    </div>
  );
}

export default Resume;
