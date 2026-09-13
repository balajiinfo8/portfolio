import { useState, useEffect } from 'react';

const Hero = () => {
  const [title, setTitle] = useState('');
  const fullTitle = "Building Backend Solutions with Python";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index <= fullTitle.length) {
        setTitle(fullTitle.slice(0, index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="hero">
      <div className="hero-background-glow"></div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <span className="hero-badge">
          <span className="pulse-dot"></span> Available for Backend & Full-Stack Opportunities
        </span>

        <h1 id="hero-title" className={title.length < fullTitle.length ? 'typing-effect' : ''}>
          {title.startsWith("Building Backend Solutions") ? (
            <>
              Building <span className="gradient-text">Backend Solutions</span>{title.slice(26)}
            </>
          ) : (
            title
          )}
        </h1>

        <p className="hero-description">
          Backend Developer with 1+ years of hands-on experience across associate engineering and internship roles, specializing in secure REST APIs, scalable asynchronous architectures, and AI/Speech integration. Ranked in the Top 15% globally on TryHackMe.
        </p>

        <div className="btn-group">
          <a href="#projects" className="btn btn-primary">
            🚀 View My Projects
          </a>
          <a
            href="https://drive.google.com/file/d/10SLv1_MPH9A9UInrvp2EUm5BqQF7KWbr/view"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            📄 View Resume
          </a>
          <a
            href="https://github.com/balajiinfo8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            🐙 GitHub Profile
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-icon">💼</span>
            <div>
              <div className="stat-number">1+ Years</div>
              <div className="stat-title">Industry Experience</div>
            </div>
          </div>
          <div className="stat-item">
            <span className="stat-icon">🛡️</span>
            <div>
              <div className="stat-number">Top 15%</div>
              <div className="stat-title">TryHackMe Global</div>
            </div>
          </div>
          <div className="stat-item">
            <span className="stat-icon">⚙️</span>
            <div>
              <div className="stat-number">Django & FastAPI</div>
              <div className="stat-title">Core Backend Stack</div>
            </div>
          </div>
          <div className="stat-item">
            <span className="stat-icon">📍</span>
            <div>
              <div className="stat-number">Bangalore, IN</div>
              <div className="stat-title">Open to Remote / Reloc</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;