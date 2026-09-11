const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">
          <span className="accent-hash">#</span> Professional Experience
        </h2>
        <p className="section-subtitle">
          1+ years of backend engineering across full-time and internship roles building high-concurrency APIs and services.
        </p>

        <div className="timeline-container">
          <div className="timeline-item fade-in-section">
            <div className="timeline-dot"></div>
            <div className="experience-card">
              <div className="experience-header">
                <div>
                  <h3>Python Backend Developer Intern</h3>
                  <h4 className="company-name">Sumeru Digital Solutions</h4>
                </div>
                <span className="date-badge">Dec 2025 – Mar 2026</span>
              </div>
              <ul>
                <li>Engineered high-throughput asynchronous backend services using <strong>FastAPI</strong> and <strong>AsyncIO</strong>.</li>
                <li>Architected an end-to-end real-time speech translation pipeline integrating <strong>Whisper</strong> and <strong>Azure Speech Services</strong> via <strong>WebSockets</strong>.</li>
                <li>Implemented robust session state handling, low-latency audio stream processing, and secure <strong>CORS middleware</strong>.</li>
              </ul>
              <div className="tag-row" style={{ marginTop: '14px' }}>
                <span className="tag">FastAPI</span>
                <span className="tag">AsyncIO</span>
                <span className="tag">WebSockets</span>
                <span className="tag">Whisper</span>
                <span className="tag">Azure Speech</span>
              </div>
            </div>
          </div>

          <div className="timeline-item fade-in-section">
            <div className="timeline-dot"></div>
            <div className="experience-card">
              <div className="experience-header">
                <div>
                  <h3>Associate Engineer / Backend Intern</h3>
                  <h4 className="company-name">Aparajitha Corporate Services Pvt. Ltd.</h4>
                </div>
                <span className="date-badge">May 2024 – May 2025</span>
              </div>
              <ul>
                <li>Architected and deployed scalable RESTful APIs using <strong>Django REST Framework</strong> for compliance automation workflows.</li>
                <li>Designed relational database schemas and optimized <strong>MySQL</strong> queries and indexes to minimize response latencies.</li>
                <li>Integrated external verification APIs with end-to-end exception logging and <strong>JWT-based endpoint security</strong>.</li>
              </ul>
              <div className="tag-row" style={{ marginTop: '14px' }}>
                <span className="tag">Django</span>
                <span className="tag">DRF</span>
                <span className="tag">MySQL</span>
                <span className="tag">JWT Auth</span>
                <span className="tag">RESTful APIs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;