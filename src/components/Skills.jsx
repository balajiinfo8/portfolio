const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Core technologies, frameworks, and engineering tools I utilize to build scalable systems.
        </p>
        <div className="skills-grid">
          <div className="skill-category fade-in-section">
            <h3>Languages</h3>
            <div className="tag-row">
              <span className="tag">Python</span>
              <span className="tag">JavaScript</span>
            </div>
          </div>

          <div className="skill-category fade-in-section">
            <h3>Backend & Frameworks</h3>
            <div className="tag-row">
              <span className="tag">Django</span>
              <span className="tag">Django REST Framework</span>
              <span className="tag">FastAPI</span>
              <span className="tag">RESTful APIs</span>
              <span className="tag">JWT Authentication</span>
              <span className="tag">WebSockets</span>
              <span className="tag">AsyncIO</span>
            </div>
          </div>

          <div className="skill-category fade-in-section">
            <h3>Databases</h3>
            <div className="tag-row">
              <span className="tag">PostgreSQL</span>
              <span className="tag">MySQL</span>
            </div>
          </div>

          <div className="skill-category fade-in-section">
            <h3>AI & Speech Integration</h3>
            <div className="tag-row">
              <span className="tag">Together AI (Meta Llama)</span>
              <span className="tag">Whisper</span>
              <span className="tag">Azure Speech Services</span>
            </div>
          </div>

          <div className="skill-category fade-in-section">
            <h3>Frontend & Tooling</h3>
            <div className="tag-row">
              <span className="tag">React.js</span>
              <span className="tag">Tailwind CSS / Bootstrap</span>
              <span className="tag">Git</span>
              <span className="tag">GitHub</span>
              <span className="tag">Linux</span>
              <span className="tag">Postman</span>
            </div>
          </div>

          <div className="skill-category fade-in-section">
            <h3>Cybersecurity</h3>
            <div className="tag-row">
              <span className="tag">TryHackMe (Top 15% Global Rank)</span>
              <span className="tag">OWASP Top 10</span>
              <span className="tag">Web Attack Detection</span>
              <span className="tag">Pentesting Fundamentals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;