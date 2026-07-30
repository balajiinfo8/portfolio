const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="summary-box fade-in-section">
          <h3>Python Backend Developer</h3>
          <strong>Aparajitha Corporate Services Pvt. Ltd.</strong>
          <p className="meta">Intern (May 2024 – Aug 2024)</p>
          <p className="meta">Associate Engineer (Sep 2024 – May 2025)</p>
          <ul>
            <li>Developed REST APIs using Django REST Framework.</li>
            <li>Worked with MySQL databases and backend services.</li>
            <li>Integrated third-party APIs into production applications.</li>
          </ul>
        </div>
        <div className="summary-box fade-in-section">
          <h3>Python Backend Developer Intern</h3>
          <strong>Sumeru Digital Solutions</strong>
          <p className="meta">
            Python Backend Developer Intern (Dec 2025 – Mar 2026)
          </p>
          <ul>
            <li>Built FastAPI backend services.</li>
            <li>Worked on AI-powered speech translation systems.</li>
            <li>Implemented WebSockets and AsyncIO.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;