const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Production-focused applications showcasing real-time data, REST APIs, and AI integrations.
        </p>

        <div className="project-list">
          {/* Real-Time Voice Translation System */}
          <div className="project-card fade-in-section">
            <div>
              <h3>Real-Time Voice Translation System</h3>
              <p className="project-desc">
                Engineered a low-latency bidirectional streaming architecture utilizing WebSockets and AsyncIO for real-time speech capture, transcription, and multi-language translation via Whisper and Azure Speech.
              </p>
            </div>
            <div className="project-card-footer">
              <div className="tag-row" style={{ marginBottom: '16px' }}>
                <span className="tag">FastAPI</span>
                <span className="tag">WebSockets</span>
                <span className="tag">AsyncIO</span>
                <span className="tag">Whisper</span>
              </div>
              <div className="links">
                <a
                  href="https://github.com/balajiinfo8/FastAPI-Live-Translator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  📂 Source Code
                </a>
              </div>
            </div>
          </div>

          {/* AskAI Assistant */}
          <div className="project-card fade-in-section">
            <div>
              <h3>AskAI Assistant</h3>
              <p className="project-desc">
                Modular REST API backend integrating Together AI (Meta Llama) endpoints for dynamic conversational responses, featuring token rate-limiting, history caching, and structured JSON output parsing.
              </p>
            </div>
            <div className="project-card-footer">
              <div className="tag-row" style={{ marginBottom: '16px' }}>
                <span className="tag">Django</span>
                <span className="tag">DRF</span>
                <span className="tag">Together AI</span>
                <span className="tag">PostgreSQL</span>
              </div>
              <div className="links">
                <a
                  href="https://askai-django-assistant.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  🚀 Live Demo
                </a>
                <a
                  href="https://github.com/balajiinfo8/AskAI-Django-Assistant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  📂 Source Code
                </a>
              </div>
            </div>
          </div>

          {/* Task Management API */}
          <div className="project-card fade-in-section">
            <div>
              <h3>Task Management API</h3>
              <p className="project-desc">
                Production-grade CRUD API with complete Role-Based Access Control (RBAC), JWT authentication, automated schema validations, and relational MySQL query optimizations.
              </p>
            </div>
            <div className="project-card-footer">
              <div className="tag-row" style={{ marginBottom: '16px' }}>
                <span className="tag">Django REST</span>
                <span className="tag">JWT Auth</span>
                <span className="tag">MySQL</span>
                <span className="tag">RBAC</span>
              </div>
              <div className="links">
                <a
                  href="https://task-manager-django-iqs0.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  🚀 Live Demo
                </a>
                <a
                  href="https://github.com/balajiinfo8/task_manager_django"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  📂 Source Code
                </a>
              </div>
            </div>
          </div>

          {/* Movie Recommendation App */}
          <div className="project-card fade-in-section">
            <div>
              <h3>Movie Recommendation App</h3>
              <p className="project-desc">
                Responsive client-side interface built with React.js and Vite, consuming external RESTful movie APIs with debounced search functionality and custom React hook state management.
              </p>
            </div>
            <div className="project-card-footer">
              <div className="tag-row" style={{ marginBottom: '16px' }}>
                <span className="tag">React.js</span>
                <span className="tag">Vite</span>
                <span className="tag">REST API</span>
              </div>
              <div className="links">
                <a
                  href="https://balajiinfo8.github.io/React-MovieRecommendationApp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  🚀 Live Demo
                </a>
                <a
                  href="https://github.com/balajiinfo8/React-MovieRecommendationApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  📂 Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;