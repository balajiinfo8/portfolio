const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Bangalore, Karnataka, India • Open to Remote & Relocation
        </p>

        <div className="contact-grid fade-in-section" style={{ maxWidth: '850px', margin: '30px auto 0' }}>
          <div className="contact-card">
            <p className="contact-label">Email</p>
            <a href="mailto:balajivinothkumar.dev@gmail.com" className="contact-value-link">
              balajivinothkumar.dev@gmail.com
            </a>
          </div>

          <div className="contact-card">
            <p className="contact-label">Phone</p>
            <p className="contact-value">+91-9500547928</p>
          </div>

          <div className="contact-card">
            <p className="contact-label">Location</p>
            <p className="contact-value">Bangalore, India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
