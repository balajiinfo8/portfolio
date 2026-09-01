const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          Professional software engineering experience in building backend services, APIs, and real-time systems.
        </p>
        
        <div className="summary-box fade-in-section" style={{ marginBottom: '24px' }}>
          <h3>Associate Engineer & Intern</h3>
          <strong>Aparajitha Corporate Services Pvt. Ltd.</strong>
          <p className="meta">May 2024 – May 2025</p>
          <ul>
            <li>Architected and maintained scalable RESTful APIs using Django REST Framework to support core business compliance workflows.</li>
            <li>Designed relational schemas and optimized complex queries in MySQL, improving database retrieval performance.</li>
            <li>Integrated secure third-party payment and verification services with robust error handling and JWT-based authentication.</li>
          </ul>
        </div>

        <div className="summary-box fade-in-section">
          <h3>Python Backend Developer Intern</h3>
          <strong>Sumeru Digital Solutions</strong>
          <p className="meta">Dec 2025 – Mar 2026</p>
          <ul>
            <li>Engineered high-throughput asynchronous backend services using FastAPI and AsyncIO.</li>
            <li>Developed an end-to-end real-time speech translation pipeline integrating Whisper and Azure Speech Services via WebSockets.</li>
            <li>Implemented robust CORS handling, session state management, and low-latency audio stream processing.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;