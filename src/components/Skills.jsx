const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          Core technologies I use to build scalable systems and APIs.
        </p>
        
        <div className="skills-grid">
          <div className="skill-category fade-in-section">
            <h3>⚙️ Backend & Languages</h3>
            <div className="tag-row">
              <span className="tag">Python</span>
              <span className="tag">Django</span>
              <span className="tag">FastAPI</span>
              <span className="tag">DRF</span>
              <span className="tag">JavaScript</span>
            </div>
          </div>

          <div className="skill-category fade-in-section">
            <h3>🗄️ Architecture & Databases</h3>
            <div className="tag-row">
              <span className="tag">PostgreSQL</span>
              <span className="tag">MySQL</span>
              <span className="tag">RESTful APIs</span>
              <span className="tag">WebSockets</span>
              <span className="tag">AsyncIO</span>
              <span className="tag">JWT Auth</span>
            </div>
          </div>

          <div className="skill-category fade-in-section">
            <h3>🤖 AI & Speech Integrations</h3>
            <div className="tag-row">
              <span className="tag">Together AI (Meta Llama)</span>
              <span className="tag">OpenAI Whisper</span>
              <span className="tag">Azure Speech Services</span>
            </div>
          </div>

          <div className="skill-category fade-in-section">
            <h3>🛠️ Frontend & Tooling</h3>
            <div className="tag-row">
              <span className="tag">React.js</span>
              <span className="tag">Tailwind CSS</span>
              <span className="tag">Git & GitHub</span>
              <span className="tag">Linux / Bash</span>
              <span className="tag">Postman</span>
            </div>
          </div>

          <div className="skill-category skill-category-wide fade-in-section">
            <h3 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>🛡️ Cybersecurity & Defense</span>
              <span className="thm-badge" style={{ fontSize: '0.75rem', padding: '3px 8px' }}>Top 15% TryHackMe</span>
            </h3>
            <div className="tag-row">
              <span className="tag">OWASP Top 10</span>
              <span className="tag">Web Attack Detection</span>
              <span className="tag">Pentesting Fundamentals</span>
              <span className="tag">Network Security</span>
              <span className="tag">CTF Challenges</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;