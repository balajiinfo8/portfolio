import { useState, useEffect } from 'react';

const LiveClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  const timeFormatter = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZoneName: 'short'
  });

  return (
    <div className="live-clock" aria-live="polite">
      <span id="clock-date">{dateFormatter.format(time)}</span>
      <span className="clock-dot">•</span>
      <span id="clock-time">{timeFormatter.format(time)}</span>
    </div>
  );
};


const Header = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'dsa' | 'resume' | 'contact' | null

  const toggleDropdown = (name) => {
    setActiveDropdown(prev => (prev === name ? null : name));
  };

  const handleNavLinkClick = (sectionId) => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="site-header">
      <div className="nav-container">
        <a href="#" className="logo" onClick={(e) => { e.preventDefault(); handleNavLinkClick('top'); }}>
          💻 Balaji V
        </a>

        <div className="header-right-items">
          <LiveClock />

          <button
            id="theme-toggle-header"
            className="theme-toggle-btn-mobile"
            onClick={toggleTheme}
            aria-label="Toggle light/dark theme"
          >
            {theme === 'dark' ? '🌞' : '🌛'}
          </button>

          <button
            className="menu-toggle"
            id="hamburger-button"
            onClick={() => setIsMenuOpen(prev => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="nav-links">
            <li>
              <a href="#about" onClick={() => handleNavLinkClick('about')}>About</a>
            </li>
            <li>
              <a href="#skills" onClick={() => handleNavLinkClick('skills')}>Skills</a>
            </li>
            <li>
              <a href="#experience" onClick={() => handleNavLinkClick('experience')}>Experience</a>
            </li>
            <li>
              <a href="#projects" onClick={() => handleNavLinkClick('projects')}>Projects</a>
            </li>

            <li className={`dsa-menu ${activeDropdown === 'dsa' ? 'dropdown-open' : ''}`}>
              <button
                type="button"
                className="dropdown-trigger"
                onClick={() => toggleDropdown('dsa')}
                aria-expanded={activeDropdown === 'dsa'}
              >
                Coding Profiles <span className="dropdown-arrow">{activeDropdown === 'dsa' ? '▲' : '▼'}</span>
              </button>
              <div className="dropdown-dsa">
                <a
                  href="https://www.geeksforgeeks.org/profile/balaji_v08"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  GeeksForGeeks
                </a>
                <a
                  href="https://leetcode.com/u/BalajiCode08/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  LeetCode
                </a>
                <a
                  href="https://www.hackerrank.com/profile/vjb08"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  HackerRank
                </a>
              </div>
            </li>

            <li className={`resume-menu ${activeDropdown === 'resume' ? 'dropdown-open' : ''}`}>
              <button
                type="button"
                className="dropdown-trigger"
                onClick={() => toggleDropdown('resume')}
                aria-expanded={activeDropdown === 'resume'}
              >
                📄 Resume <span className="dropdown-arrow">{activeDropdown === 'resume' ? '▲' : '▼'}</span>
              </button>
              <div className="dropdown-resume">
                <a
                  href="https://drive.google.com/uc?export=download&id=1dSDemub-CeNqeviRze7WtMkKCnsvgdcZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ⬇️ Download
                </a>
                <a
                  href="https://drive.google.com/file/d/1dSDemub-CeNqeviRze7WtMkKCnsvgdcZ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  👁️ View
                </a>
              </div>
            </li>

            <li className={`contact-menu ${activeDropdown === 'contact' ? 'dropdown-open' : ''}`}>
              <div className="contact-trigger-wrapper">
                <a
                  href="#contact"
                  className="contact-main-link"
                  onClick={() => handleNavLinkClick('contact')}
                >
                  📬 Contact
                </a>
                <button
                  type="button"
                  className="dropdown-trigger-toggle"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown('contact');
                  }}
                  aria-label="Toggle contact links"
                  aria-expanded={activeDropdown === 'contact'}
                >
                  <span className="dropdown-arrow">{activeDropdown === 'contact' ? '▲' : '▼'}</span>
                </button>
              </div>

              <div className="dropdown-contact">
                <a
                  href="#contact"
                  className="dropdown-section-link"
                  onClick={() => handleNavLinkClick('contact')}
                >
                  📍 Go to Contact Section
                </a>
                <a
                  href="mailto:balajivinothkumar.dev@gmail.com?subject=Job Opportunity"
                  onClick={() => setIsMenuOpen(false)}
                >
                  📧 Email
                </a>
                <a
                  href="tel:+919500547928"
                  onClick={() => setIsMenuOpen(false)}
                >
                  📱 Call
                </a>
                <a
                  href="https://github.com/balajiinfo8"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  🐙 GitHub
                </a>
                <a
                  href="https://linkedin.com/in/balaji-vinothkumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  💼 LinkedIn
                </a>
              </div>
            </li>

            <li className="desktop-theme-toggle">
              <button
                type="button"
                id="theme-toggle"
                onClick={toggleTheme}
                aria-label="Toggle light/dark theme"
              >
                {theme === 'dark' ? '🌞' : '🌛'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;