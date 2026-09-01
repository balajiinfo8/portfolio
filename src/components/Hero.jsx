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
      <div className="container">
        <span className="hero-badge">
          Python Backend Developer • Django & FastAPI
        </span>

        <h1 id="hero-title" className={title.length < fullTitle.length ? 'typing-effect' : ''}>
          {title}
        </h1>

        <p className="hero-description">
          Backend Developer with 1+ years of industry experience specializing in secure REST APIs, scalable asynchronous architectures, and AI/Speech integration. Ranked in the Top 15% globally on TryHackMe.
        </p>

        <div className="btn-group">
          <a href="#projects" className="btn btn-primary">
            View My Projects
          </a>
          <a
            href="https://github.com/balajiinfo8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;