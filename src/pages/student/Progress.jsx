function Progress() {

  const skills = [
    { name: "Data Structures", percent: 0 },
    { name: "Algorithms", percent: 0 },
    { name: "Communication", percent: 0 }
  ];

  const hasProgress = skills.some(skill => skill.percent > 0);

  return (
    <div className="progress-page">

      <h2>Your Learning Progress</h2>

      {!hasProgress && (
        <div className="no-progress">
          🚀 Start learning to see your progress here.
        </div>
      )}

      {skills.map((skill, index) => (
        <div key={index} className="skill-card">
          <div className="skill-header">
            <span>{skill.name}</span>
            <span>{skill.percent}%</span>
          </div>

          <div className="progress-bar">
            <div
              className={`progress-fill ${skill.percent === 0 ? "empty" : ""}`}
              style={{ width: `${skill.percent}%` }}
            ></div>
          </div>
        </div>
      ))}

    </div>
  );
}

export default Progress;