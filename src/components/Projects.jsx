const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Real-world projects demonstrating Django, FastAPI, REST APIs, AI integration, authentication, and modern frontend development.
        </p>
        <div className="project-list">
          {/* Real-Time Voice Translation System */}
          <div className="project-card fade-in-section">
            <h3>Real-Time Voice Translation System</h3>
            <p className="meta">
              FastAPI | WebSockets | AsyncIO | Whisper | Azure Speech Services
            </p>
            <ul>
              <li>Built a low-latency bidirectional streaming architecture utilizing WebSockets and AsyncIO for real-time audio capture and translation.</li>
              <li>Integrated OpenAI Whisper models and Azure Speech Services for rapid speech-to-text transcription and multilingual synthesis.</li>
            </ul>
            <div className="tag-row">
              <span className="tag">FastAPI</span>
              <span className="tag">WebSockets</span>
              <span className="tag">AsyncIO</span>
              <span className="tag">Whisper</span>
              <span className="tag">Azure Speech</span>
              <span className="tag">JavaScript</span>
            </div>
            <div className="links">
              <a href="https://github.com/balajiinfo8/FastAPI-Live-Translator" target="_blank" rel="noopener noreferrer">
                📂 Source Code
              </a>
            </div>
          </div>

          {/* AskAI Assistant */}
          <div className="project-card fade-in-section">
            <h3>AskAI Assistant</h3>
            <p className="meta">
              Django | DRF | Together AI (Meta Llama) | PostgreSQL
            </p>
            <ul>
              <li>Designed a modular REST API backend leveraging Together AI (Meta Llama) endpoints for dynamic conversational responses.</li>
              <li>Implemented token usage rate limiting, conversation history caching, and structured JSON output parsing.</li>
            </ul>
            <div className="tag-row">
              <span className="tag">Django</span>
              <span className="tag">Django REST Framework</span>
              <span className="tag">PostgreSQL</span>
              <span className="tag">Together AI</span>
              <span className="tag">REST API</span>
              <span className="tag">JavaScript</span>
            </div>
            <div className="links">
              <a href="https://askai-django-assistant.onrender.com/" target="_blank" rel="noopener noreferrer">
                🚀 Live Demo
              </a>
              <a href="https://github.com/balajiinfo8/AskAI-Django-Assistant" target="_blank" rel="noopener noreferrer">
                📂 Source Code
              </a>
            </div>
          </div>

          {/* Task Management API */}
          <div className="project-card fade-in-section">
            <h3>Task Management API</h3>
            <p className="meta">
              Django | DRF | JWT | MySQL
            </p>
            <ul>
              <li>Engineered production-ready CRUD endpoints with full role-based access control (RBAC) and secure JWT authentication.</li>
              <li>Configured automated data validation schemas and optimized relational foreign-key indexing in MySQL.</li>
            </ul>
            <div className="tag-row">
              <span className="tag">Django</span>
              <span className="tag">DRF</span>
              <span className="tag">JWT</span>
              <span className="tag">MySQL</span>
              <span className="tag">REST API</span>
              <span className="tag">RBAC</span>
            </div>
            <div className="links">
              <a href="https://task-manager-django-iqs0.onrender.com" target="_blank" rel="noopener noreferrer">
                🚀 Live Demo
              </a>
              <a href="https://github.com/balajiinfo8/task_manager_django" target="_blank" rel="noopener noreferrer">
                📂 Source Code
              </a>
            </div>
          </div>

          {/* Movie Recommendation System */}
          <div className="project-card fade-in-section">
            <h3>Movie Recommendation System</h3>
            <p className="meta">
              React.js | Vite | REST API
            </p>
            <ul>
              <li>Developed a responsive web interface utilizing React Hooks for state management and dynamic client-side filtering.</li>
              <li>Consumed third-party RESTful movie data feeds with debounced search functionality.</li>
            </ul>
            <div className="tag-row">
              <span className="tag">React.js</span>
              <span className="tag">JavaScript</span>
              <span className="tag">REST API</span>
              <span className="tag">React Hooks</span>
              <span className="tag">Vite</span>
            </div>
            <div className="links">
              <a href="https://balajiinfo8.github.io/React-MovieRecommendationApp/" target="_blank" rel="noopener noreferrer">
                🚀 Live Demo
              </a>
              <a href="https://github.com/balajiinfo8/React-MovieRecommendationApp" target="_blank" rel="noopener noreferrer">
                📂 Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;