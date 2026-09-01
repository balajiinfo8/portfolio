const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="summary-box fade-in-section" style={{ maxWidth: '900px', margin: 'auto' }}>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
            <span className="accent-hash">#</span> About Me
          </h2>
          <p>
            I am a Python Backend Developer with 1+ years of hands-on engineering experience across full-time and internship positions, designing secure, modular, and maintainable backend systems.
          </p>
          <p>
            My core technical stack centers around <strong>Django</strong>, <strong>Django REST Framework</strong>, <strong>FastAPI</strong>, relational databases (<strong>PostgreSQL, MySQL</strong>), <strong>WebSockets</strong>, and <strong>AsyncIO</strong> for high-concurrency streaming.
          </p>
          <p>
            Beyond core backend engineering, I maintain a strong focus on cybersecurity and application defense, holding a <strong>Top 15% Global Rank on TryHackMe</strong> with 48+ solved security rooms and CTFs in penetration testing and web attack detection.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;