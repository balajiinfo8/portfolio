import { useState, useEffect } from 'react';

const Hero = () => {
  const [title, setTitle] = useState('');
  const fullTitle = "Building Backend Solutions with Python";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < fullTitle.length) {
        setTitle(prev => prev + fullTitle.charAt(index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 60);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <h1 id="hero-title" className={title.length < fullTitle.length ? 'typing-effect' : ''}>
          {title}
        </h1>

        <h2>Python Backend Developer</h2>

        <p className="hero-description">
          Junior Backend Developer focused on building secure REST APIs, scalable backend systems, and AI-powered web applications using Django, FastAPI, and Python.
        </p>
        <div className="btn-group">
          <a href="#projects" className="btn btn-primary">View My Projects</a>
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