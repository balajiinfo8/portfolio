const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">
          Feel free to reach out for job opportunities, collaborations, or technical queries.
        </p>

        <div className="contact-grid fade-in-section">
          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <h3>Email</h3>
            <p><small>balajivinothkumar.dev@gmail.com</small></p>
            <a
              href="mailto:balajivinothkumar.dev@gmail.com?subject=Job Opportunity"
              className="btn btn-primary contact-btn"
            >
              Send Email
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📱</div>
            <h3>Phone</h3>
            <p>+91-9500547928</p>
            <a href="tel:+919500547928" className="btn btn-secondary contact-btn">
              Call Now
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <h3>Location</h3>
            <p>Bangalore, Karnataka, India</p>
            <span className="contact-status">Open to Remote & Relocation</span>
          </div>

          <div className="contact-card">
            <div className="contact-icon">🌐</div>
            <h3>Profiles</h3>
            <p>Connect on Social & Code</p>
            <div className="contact-social-links">
              <a
                href="https://github.com/balajiinfo8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                🐙 GitHub
              </a>
              <a
                href="https://linkedin.com/in/balaji-vinothkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                💼 LinkedIn
              </a>
              <a
                href="https://tryhackme.com/p/balajivinothkumar08"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                🎯 TryHackMe
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
