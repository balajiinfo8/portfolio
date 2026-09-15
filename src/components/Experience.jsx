const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">
          <span className="accent-hash">#</span> Professional Experience
        </h2>
        <p className="section-subtitle">
          Hands-on backend engineering experience across software engineering and internship roles.
        </p>

        <div className="timeline-container">
          {/* Role 1: Sumeru Internship */}
          <div className="timeline-item fade-in-section">
            <div className="timeline-dot"></div>
            <div className="experience-card">
              <div className="experience-header">
                <div>
                  <h3>Python Backend Developer Intern</h3>
                  <h4 className="company-name">Sumeru Digital Solutions Pvt. Ltd.</h4>
                </div>
                <span className="date-badge">Dec 2025 – Mar 2026</span>
              </div>
              <ul>
                <li>Worked on backend services using Python and FastAPI.</li>
                <li>Worked with AsyncIO and WebSockets for real-time asynchronous communication.</li>
                <li>Worked on a real-time speech translation system integrating Whisper and Azure Speech Services.</li>
                <li>Implemented session handling, audio-stream processing, and CORS configuration.</li>
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

          {/* Role 2: Aparajitha Associate Engineer */}
          <div className="timeline-item fade-in-section">
            <div className="timeline-dot"></div>
            <div className="experience-card">
              <div className="experience-header">
                <div>
                  <h3>Associate Engineer / Backend Developer</h3>
                  <h4 className="company-name">Aparajitha Corporate Services Pvt. Ltd.</h4>
                </div>
                <span className="date-badge">Sep 2024 – May 2025</span>
              </div>
              <ul>
                <li>Developed backend functionality using Python, Django, and Django REST Framework.</li>
                <li>Built and maintained REST APIs for business workflows.</li>
                <li>Worked with MySQL and Django ORM for database operations.</li>
                <li>Implemented JWT authentication and integrated external APIs.</li>
                <li>Worked with Postman, Git, Jira, and SonarQube as part of backend development and testing workflows.</li>
              </ul>
              <div className="tag-row" style={{ marginTop: '14px' }}>
                <span className="tag">Python</span>
                <span className="tag">Django</span>
                <span className="tag">DRF</span>
                <span className="tag">MySQL</span>
                <span className="tag">JWT Auth</span>
                <span className="tag">REST APIs</span>
              </div>
            </div>
          </div>

          {/* Role 3: Aparajitha Internship */}
          <div className="timeline-item fade-in-section">
            <div className="timeline-dot"></div>
            <div className="experience-card">
              <div className="experience-header">
                <div>
                  <h3>Django Backend Developer Intern</h3>
                  <h4 className="company-name">Aparajitha Corporate Services Pvt. Ltd.</h4>
                </div>
                <span className="date-badge">May 2024 – Aug 2024</span>
              </div>
              <ul>
                <li>Worked with Python and Django on backend development tasks.</li>
                <li>Developed and tested REST API functionality using Django REST Framework.</li>
                <li>Worked with MySQL and Django ORM for backend data operations.</li>
                <li>Assisted with backend features and API testing.</li>
              </ul>
              <div className="tag-row" style={{ marginTop: '14px' }}>
                <span className="tag">Python</span>
                <span className="tag">Django</span>
                <span className="tag">DRF</span>
                <span className="tag">MySQL</span>
                <span className="tag">REST APIs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;