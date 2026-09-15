const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="summary-box fade-in-section" style={{ maxWidth: '900px', margin: 'auto' }}>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
            <span className="accent-hash">#</span> About Me
          </h2>
          <p>
            Backend development experience across a full-time backend role and technical internships, working with Django, Django REST Framework, FastAPI, REST APIs, MySQL, PostgreSQL, WebSockets, and AsyncIO.
          </p>
          <p>
            Beyond core backend engineering, I maintain a strong focus on cybersecurity and application defense, holding a <strong>Top 10% Global Rank on TryHackMe</strong> with 53+ solved security rooms and CTFs in penetration testing and web attack detection.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;