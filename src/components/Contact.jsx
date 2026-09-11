const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">
          <span className="accent-hash">#</span> Get In Touch
        </h2>
        <p className="section-subtitle">
          Bangalore, Karnataka, India • Open to Remote & Full-Time Relocation Opportunities
        </p>

        <div className="contact-grid fade-in-section">
          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <p className="contact-label">Direct Email</p>
            <a href="mailto:balajivinothkumar.dev@gmail.com?subject=Opportunity%20Enquiry" className="contact-value-link">
              balajivinothkumar.dev@gmail.com
            </a>
            <div className="links" style={{ marginTop: '12px', width: '100%' }}>
              <a href="mailto:balajivinothkumar.dev@gmail.com?subject=Opportunity%20Enquiry" className="btn btn-primary contact-btn">
                📩 Send Email
              </a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📱</div>
            <p className="contact-label">Phone / WhatsApp</p>
            <p className="contact-value">+91-9500547928</p>
            <div className="links" style={{ marginTop: '12px', width: '100%' }}>
              <a href="tel:+919500547928" className="btn btn-secondary contact-btn">
                📞 Call Now
              </a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <p className="contact-label">Primary Location</p>
            <p className="contact-value">Bangalore, Karnataka, India</p>
            <span className="contact-status" style={{ marginTop: '14px' }}>🟢 Open to Remote & Relocation</span>
          </div>

          <div className="contact-card contact-card-wide">
            <div className="contact-icon">🌐</div>
            <p className="contact-label">Connect & Coding Profiles</p>
            <p className="contact-value">Explore Code & Security Credentials</p>
            <div className="contact-social-links" style={{ marginTop: '14px' }}>
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
                🛡️ TryHackMe
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
