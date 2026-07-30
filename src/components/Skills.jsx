const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Core technologies I use to build backend systems and APIs.
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
            <h3>Backend Frameworks</h3>
            <div className="tag-row">
              <span className="tag">Django</span>
              <span className="tag">Django REST Framework</span>
              <span className="tag">FastAPI</span>
            </div>
          </div>
          <div className="skill-category fade-in-section">
            <h3>Databases</h3>
            <div className="tag-row">
              <span className="tag">MySQL</span>
              <span className="tag">PostgreSQL</span>
            </div>
          </div>
          <div className="skill-category fade-in-section">
            <h3>Backend Concepts</h3>
            <div className="tag-row">
              <span className="tag">REST APIs</span>
              <span className="tag">JWT Authentication</span>
              <span className="tag">WebSockets</span>
              <span className="tag">AsyncIO</span>
            </div>
          </div>
          <div className="skill-category fade-in-section">
            <h3>AI Integration</h3>
            <div className="tag-row">
              <span className="tag">Together AI (Meta Llama)</span>
              <span className="tag">Whisper</span>
              <span className="tag">Azure Speech Services</span>
            </div>
          </div>
          <div className="skill-category fade-in-section">
            <h3>Frontend & Tools</h3>
            <div className="tag-row">
              <span className="tag">React.js</span>
              <span className="tag">HTML5</span>
              <span className="tag">CSS3</span>
              <span className="tag">Bootstrap</span>
              <span className="tag">Git</span>
              <span className="tag">GitHub</span>
            </div>
          </div>
          <div className="skill-category fade-in-section">
            <h3>AI Tools</h3>
            <div className="tag-row">
              <span className="tag">ChatGPT</span>
              <span className="tag">Gemini</span>
              <span className="tag">Claude</span>
              <span className="tag">GitHub Copilot</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;