const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">
          <span className="accent-hash">#</span> Featured Projects
        </h2>
        <p className="section-subtitle">
          Production-focused applications with visual mockups, problem summaries, and tech stack breakdowns.
        </p>

        <div className="project-list">
          {/* Project 1: Real-Time Voice Translation System */}
          <div className="project-card fade-in-section">
            <div>
              {/* Visual Mockup Banner */}
              <div className="project-mockup-banner">
                <div className="mockup-header">
                  <span className="mockup-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </span>
                  <span className="mockup-title">fastapi-live-translator.local</span>
                  <span className="mockup-pill text-cyan">⚡ WebSockets Active</span>
                </div>
                <div className="mockup-body">
                  <div className="mockup-code-line">
                    <span className="code-kw">WS</span> /ws/transcribe <span className="code-str">"Audio Chunk [PCM Stream]"</span>
                  </div>
                  <div className="mockup-code-line">
                    <span className="code-output font-mono">Whisper STT: "Hello, backend engineering team"</span>
                  </div>
                  <div className="mockup-code-line">
                    <span className="code-success font-mono">Azure Speech [ES-ES]: "Hola, equipo de ingeniería backend"</span>
                  </div>
                </div>
              </div>

              <div className="project-category-badge" style={{ marginTop: '16px' }}>
                ⚡ Real-Time Streaming & AI
              </div>
              <h3>Real-Time Voice Translation System</h3>

              {/* Structured Summary Breakdown */}
              <div className="project-summary-box">
                <div className="summary-item">
                  <strong className="summary-label">🎯 Problem Solved:</strong>
                  <p className="summary-text">
                    Cross-language communication requires streaming audio continuously without lag, requiring an efficient bidirectional connection rather than standard HTTP polling.
                  </p>
                </div>

                <div className="summary-item">
                  <strong className="summary-label">👨‍💻 My Role & Implementation:</strong>
                  <p className="summary-text">
                    <strong>Backend Developer</strong> — Designed and implemented an asynchronous bidirectional WebSocket pipeline using <strong>FastAPI</strong> and <strong>AsyncIO</strong> to stream audio chunks, integrated <strong>OpenAI Whisper</strong> for speech-to-text transcription, and synthesized multi-language audio using <strong>Azure Speech Services</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div className="project-card-footer">
              <div className="tag-row" style={{ marginBottom: '16px' }}>
                <span className="tag">FastAPI</span>
                <span className="tag">WebSockets</span>
                <span className="tag">AsyncIO</span>
                <span className="tag">Whisper STT</span>
                <span className="tag">Azure Speech</span>
              </div>
              <div className="links">
                <a
                  href="https://github.com/balajiinfo8/FastAPI-Live-Translator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  📂 Source Code & Docs
                </a>
              </div>
            </div>
          </div>

          {/* Project 2: AskAI Assistant */}
          <div className="project-card fade-in-section">
            <div>
              {/* Visual Mockup Banner */}
              <div className="project-mockup-banner">
                <div className="mockup-header">
                  <span className="mockup-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </span>
                  <span className="mockup-title">askai-assistant.onrender.com</span>
                  <span className="mockup-pill text-purple">🤖 Llama 3 Active</span>
                </div>
                <div className="mockup-body">
                  <div className="mockup-code-line">
                    <span className="code-kw">POST</span> /api/v1/askai/chat <span className="code-str">&#123;"prompt": "Optimize SQL queries"&#125;</span>
                  </div>
                  <div className="mockup-code-line">
                    <span className="code-output font-mono">Response: "Use indexing, EXPLAIN ANALYZE, & CTEs..."</span>
                  </div>
                  <div className="mockup-code-line">
                    <span className="code-success font-mono">Status: 200 OK [JSON Output Parsed]</span>
                  </div>
                </div>
              </div>

              <div className="project-category-badge" style={{ marginTop: '16px' }}>
                🤖 LLM & Conversation API
              </div>
              <h3>AskAI Assistant</h3>

              {/* Structured Summary Breakdown */}
              <div className="project-summary-box">
                <div className="summary-item">
                  <strong className="summary-label">🎯 Problem Solved:</strong>
                  <p className="summary-text">
                    Integrating LLM APIs into web applications requires managing conversation context, handling third-party API errors, and parsing AI responses into reliable JSON formats.
                  </p>
                </div>

                <div className="summary-item">
                  <strong className="summary-label">👨‍💻 My Role & Implementation:</strong>
                  <p className="summary-text">
                    <strong>Backend Developer</strong> — Built modular <strong>Django REST Framework</strong> endpoints connecting to <strong>Together AI (Meta Llama 3)</strong> endpoints, handling conversation history, error logging, and structured response formatting.
                  </p>
                </div>
              </div>
            </div>

            <div className="project-card-footer">
              <div className="tag-row" style={{ marginBottom: '16px' }}>
                <span className="tag">Django</span>
                <span className="tag">DRF</span>
                <span className="tag">Together AI</span>
                <span className="tag">PostgreSQL</span>
                <span className="tag">REST API</span>
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

          {/* Project 3: Task Management API */}
          <div className="project-card fade-in-section">
            <div>
              {/* Visual Mockup Banner */}
              <div className="project-mockup-banner">
                <div className="mockup-header">
                  <span className="mockup-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </span>
                  <span className="mockup-title">task-api.onrender.com/swagger</span>
                  <span className="mockup-pill text-green">🛡️ RBAC & JWT</span>
                </div>
                <div className="mockup-body">
                  <div className="mockup-code-line">
                    <span className="code-kw">GET</span> /api/v1/tasks <span className="code-str">Headers: [Authorization: Bearer eyJ...]</span>
                  </div>
                  <div className="mockup-code-line">
                    <span className="code-output font-mono">Role: "Manager" | Access: Granted [CRUD Permissions]</span>
                  </div>
                  <div className="mockup-code-line">
                    <span className="code-success font-mono">Status: 200 OK [Filtered Task List]</span>
                  </div>
                </div>
              </div>

              <div className="project-category-badge" style={{ marginTop: '16px' }}>
                🛡️ REST API & RBAC Auth
              </div>
              <h3>Task Management API</h3>

              {/* Structured Summary Breakdown */}
              <div className="project-summary-box">
                <div className="summary-item">
                  <strong className="summary-label">🎯 Problem Solved:</strong>
                  <p className="summary-text">
                    Task management platforms need structured access control, secure authentication, and data permissions across user roles (Admin/Manager/User).
                  </p>
                </div>

                <div className="summary-item">
                  <strong className="summary-label">👨‍💻 My Role & Implementation:</strong>
                  <p className="summary-text">
                    <strong>Backend Developer</strong> — Developed RESTful CRUD endpoints using <strong>Django REST Framework</strong>, implemented <strong>JWT Authentication</strong>, role-based permission classes (Admin/Manager/User), and relational <strong>MySQL</strong> schema queries.
                  </p>
                </div>
              </div>
            </div>

            <div className="project-card-footer">
              <div className="tag-row" style={{ marginBottom: '16px' }}>
                <span className="tag">Django REST</span>
                <span className="tag">JWT Auth</span>
                <span className="tag">MySQL</span>
                <span className="tag">RBAC</span>
                <span className="tag">Swagger UI</span>
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

          {/* Project 4: Movie Recommendation App */}
          <div className="project-card fade-in-section">
            <div>
              {/* Visual Mockup Banner */}
              <div className="project-mockup-banner">
                <div className="mockup-header">
                  <span className="mockup-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </span>
                  <span className="mockup-title">balajiinfo8.github.io/movie-app</span>
                  <span className="mockup-pill text-blue">💻 React + Vite</span>
                </div>
                <div className="mockup-body">
                  <div className="mockup-code-line">
                    <span className="code-kw">Search</span> query="Inception" <span className="code-str">[Debounced Handler]</span>
                  </div>
                  <div className="mockup-code-line">
                    <span className="code-output font-mono">React State: Movie Results Rendered</span>
                  </div>
                  <div className="mockup-code-line">
                    <span className="code-success font-mono">Status: 200 OK [REST API Feed Consumed]</span>
                  </div>
                </div>
              </div>

              <div className="project-category-badge" style={{ marginTop: '16px' }}>
                💻 Modern Full-Stack UI
              </div>
              <h3>Movie Recommendation App</h3>

              {/* Structured Summary Breakdown */}
              <div className="project-summary-box">
                <div className="summary-item">
                  <strong className="summary-label">🎯 Problem Solved:</strong>
                  <p className="summary-text">
                    Media discovery interfaces require responsive client-side state handling and debounced search triggers to manage API calls efficiently during user typing.
                  </p>
                </div>

                <div className="summary-item">
                  <strong className="summary-label">👨‍💻 My Role & Implementation:</strong>
                  <p className="summary-text">
                    <strong>Full-Stack Developer</strong> — Developed a responsive web interface in <strong>React.js</strong> & <strong>Vite</strong>, created custom React hooks for state management, debounced search handlers, and dynamic API data filtering.
                  </p>
                </div>
              </div>
            </div>

            <div className="project-card-footer">
              <div className="tag-row" style={{ marginBottom: '16px' }}>
                <span className="tag">React.js</span>
                <span className="tag">Vite</span>
                <span className="tag">REST API</span>
                <span className="tag">React Hooks</span>
                <span className="tag">Debounce Search</span>
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