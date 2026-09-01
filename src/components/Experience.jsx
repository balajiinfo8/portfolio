const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          Professional software engineering experience in building backend services, APIs, and real-time systems.
        </p>

        <div className="experience-list">
          <div className="experience-card fade-in-section">
            <div className="experience-header">
              <div>
                <h3>Associate Engineer & Intern</h3>
                <h4 className="company-name">Aparajitha Corporate Services Pvt. Ltd.</h4>
              </div>
              <span className="date-badge">May 2024 – May 2025</span>
            </div>
            <ul>
              <li>Architected and maintained scalable RESTful APIs using Django REST Framework to support core business compliance workflows.</li>
              <li>Designed relational schemas and optimized complex queries in MySQL, improving database retrieval performance.</li>
              <li>Integrated secure third-party payment and verification services with robust error handling and JWT-based authentication.</li>
            </ul>
          </div>

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
              <li>Developed an end-to-end real-time speech translation pipeline integrating Whisper and Azure Speech Services via WebSockets.</li>
              <li>Implemented robust CORS handling, session state management, and low-latency audio stream processing.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;