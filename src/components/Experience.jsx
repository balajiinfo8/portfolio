const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
          1+ years of backend engineering across full-time and internship roles.
        </p>

        <div className="experience-list">
          <div className="experience-card fade-in-section">
            <div className="experience-header">
              <div>
                <h3>Python Backend Developer Intern</h3>
                <h4 className="company-name">Sumeru Digital Solutions</h4>
              </div>
              <span className="date-badge">Dec 2025 – Mar 2026</span>
            </div>
            <ul>
              <li>Engineered high-throughput asynchronous backend services using FastAPI and AsyncIO.</li>
              <li>Architected an end-to-end real-time speech translation pipeline integrating Whisper and Azure Speech Services via WebSockets.</li>
              <li>Implemented robust session state handling, low-latency audio stream processing, and secure CORS middleware.</li>
            </ul>
          </div>

          <div className="experience-card fade-in-section">
            <div className="experience-header">
              <div>
                <h3>Associate Engineer / Backend Intern</h3>
                <h4 className="company-name">Aparajitha Corporate Services Pvt. Ltd.</h4>
              </div>
              <span className="date-badge">May 2024 – May 2025</span>
            </div>
            <ul>
              <li>Architected and deployed scalable RESTful APIs using Django REST Framework for compliance automation workflows.</li>
              <li>Designed relational database schemas and optimized MySQL queries and indexes to minimize response latencies.</li>
              <li>Integrated external verification APIs with end-to-end exception logging and JWT-based endpoint security.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;