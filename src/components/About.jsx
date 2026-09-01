const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="summary-box fade-in-section" style={{ maxWidth: '900px', margin: 'auto' }}>
          <h3>Professional Summary</h3>
          <p>
            I'm Balaji Vinothkumar, a Junior Python Backend Developer with 1+ years
            of professional experience through full-time employment and internships,
            building secure, scalable, and maintainable backend applications using Python.
          </p>
          <p>
            My technical expertise includes Django, Django REST Framework, FastAPI,
            RESTful APIs, JWT Authentication, WebSockets, AsyncIO, MySQL,
            PostgreSQL, API integration, and integrating AI-powered services
            using APIs such as Together AI (Meta Llama).
          </p>
          <p>
            I enjoy designing clean backend architectures, developing RESTful web
            services, integrating AI capabilities into applications, and
            solving programming challenges through Data Structures & Algorithms.
          </p>
          <p>
            Additionally, I am passionate about cybersecurity, maintaining a <strong>Top 15% global rank on TryHackMe</strong> with 48+ completed security rooms and CTF challenges in penetration testing and web attack detection.
          </p>
          <p>
            Currently, I am expanding my frontend development skills with React
            while building full-stack applications and continuously improving my
            software engineering fundamentals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;