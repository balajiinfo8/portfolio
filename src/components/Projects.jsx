const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Real-world projects demonstrating Django, FastAPI, REST APIs, AI integration, authentication, and modern frontend development.
        </p>
        <div className="project-list">
          {/* AskAI */}
          <div className="project-card fade-in-section">
            <h3>AskAI Assistant</h3>
            <p className="meta">
              Django | Django REST Framework | Together AI (Meta Llama)
            </p>
            <ul>
              <li>Built RESTful APIs using Django REST Framework.</li>
              <li>Integrated Together AI (Meta Llama) APIs to generate AI-powered responses.</li>
              <li>Designed a modular backend architecture following Django best practices.</li>
            </ul>
            <div className="tag-row">
              <span className="tag">Django</span>
              <span className="tag">Django REST Framework</span>
              <span className="tag">REST API</span>
              <span className="tag">AI Integration</span>
              <span className="tag">HTML5</span>
              <span className="tag">CSS3</span>
              <span className="tag">Bootstrap</span>
              <span className="tag">JavaScript</span>
              <span className="tag">DTL</span>
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

          {/* Task Manager */}
          <div className="project-card fade-in-section">
            <h3>Task Management API</h3>
            <p className="meta">
              Django | Django REST Framework | JWT | MySQL
            </p>
            <ul>
              <li>Developed secure RESTful CRUD APIs using Django REST Framework.</li>
              <li>Implemented JWT authentication for protected API endpoints.</li>
              <li>Designed RESTful CRUD operations with MySQL for efficient task management.</li>
            </ul>
            <div className="tag-row">
              <span className="tag">Django</span>
              <span className="tag">DRF</span>
              <span className="tag">JWT</span>
              <span className="tag">MySQL</span>
              <span className="tag">REST API</span>
              <span className="tag">HTML5</span>
              <span className="tag">CSS3</span>
              <span className="tag">Bootstrap</span>
              <span className="tag">JavaScript</span>
              <span className="tag">DTL</span>
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

          {/* Voice Translation */}
          <div className="project-card fade-in-section">
            <h3>Real-Time Voice Translation System</h3>
            <p className="meta">
              FastAPI | WebSockets | AsyncIO | Whisper | Azure Speech Services
            </p>
            <ul>
              <li>Integrated Whisper and Azure Speech Services for speech recognition and translation.</li>
              <li>Built real-time streaming communication using WebSockets.</li>
              <li>Implemented concurrent request handling with AsyncIO.</li>
              <li>Developed a real-time speech-to-text processing pipeline using FastAPI.</li>
            </ul>
            <div className="tag-row">
              <span className="tag">FastAPI</span>
              <span className="tag">WebSockets</span>
              <span className="tag">AsyncIO</span>
              <span className="tag">Whisper</span>
              <span className="tag">Azure Speech</span>
              <span className="tag">HTML5</span>
              <span className="tag">CSS3</span>
              <span className="tag">Bootstrap</span>
              <span className="tag">JavaScript</span>
            </div>
            <div className="links">
              <a href="https://github.com/balajiinfo8/FastAPI-Live-Translator" target="_blank" rel="noopener noreferrer">
                📂 Source Code
              </a>
            </div>
          </div>

          {/* React */}
          <div className="project-card fade-in-section">
            <h3>Movie Recommendation System</h3>
            <p className="meta">
              React.js | JavaScript | Vite | REST API
            </p>
            <ul>
              <li>Built a responsive movie recommendation application using React.js.</li>
              <li>Integrated a public movie REST API to fetch and display movie information dynamically.</li>
              <li>Implemented reusable React components using Hooks for efficient state management.</li>
              <li>Deployed the application using GitHub Pages.</li>
            </ul>
            <div className="tag-row">
              <span className="tag">React.js</span>
              <span className="tag">JavaScript</span>
              <span className="tag">REST API</span>
              <span className="tag">React Hooks</span>
              <span className="tag">Vite</span>
              <span className="tag">HTML5</span>
              <span className="tag">CSS3</span>
              <span className="tag">GitHub Pages</span>
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