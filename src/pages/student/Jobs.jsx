function Jobs() {
  return (
    <div className="jobs-page">

      <h2>Recommended Jobs</h2>

      <div className="jobs-grid">

        <div className="job-card">
          <h3>Frontend Developer</h3>
          <p className="company">Google</p>
          <p>React • JavaScript • UI/UX</p>
          <button className="apply-btn">Apply Now</button>
        </div>

        <div className="job-card">
          <h3>Backend Engineer</h3>
          <p className="company">Amazon</p>
          <p>Node • APIs • Databases</p>
          <button className="apply-btn">Apply Now</button>
        </div>

        <div className="job-card">
          <h3>ML Engineer</h3>
          <p className="company">Microsoft</p>
          <p>Python • ML • Data</p>
          <button className="apply-btn">Apply Now</button>
        </div>

      </div>

    </div>
  );
}

export default Jobs;
