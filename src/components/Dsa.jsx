const Dsa = () => {
  return (
    <section id="dsa">
      <div className="container">
        <h2 className="section-title">Coding & Cybersecurity Profiles</h2>
        <p className="section-subtitle">
          Actively practicing Data Structures, Algorithms, and Ethical Hacking to strengthen problem-solving and security engineering fundamentals.
        </p>

        <div className="profiles-grid">
          {/* TryHackMe */}
          <div className="summary-box thm-card fade-in-section">
            <div className="thm-header">
              <span className="thm-badge">🎯 Top 15% Global Rank</span>
              <h3>TryHackMe - Cybersecurity & Ethical Hacking</h3>
            </div>
            <p className="profile-metric">
              Global Top 15% | 48+ Rooms Solved | Level 0x8
            </p>
            <p>
              Actively solving CTF challenges, penetration testing labs, and web application security rooms on TryHackMe.
            </p>
            <div className="thm-stats-grid">
              <div className="thm-stat">
                <span className="stat-value">Top 15%</span>
                <span className="stat-label">Global Rank</span>
              </div>
              <div className="thm-stat">
                <span className="stat-value">48+</span>
                <span className="stat-label">Rooms Solved</span>
              </div>
              <div className="thm-stat">
                <span className="stat-value">8</span>
                <span className="stat-label">Badges</span>
              </div>
              <div className="thm-stat">
                <span className="stat-value">0x8</span>
                <span className="stat-label">Level</span>
              </div>
            </div>
            <div className="tag-row" style={{ marginTop: '12px' }}>
              <span className="tag">CTF (Pickle Rick)</span>
              <span className="tag">Pentesting Fundamentals</span>
              <span className="tag">Web Attack Detection</span>
              <span className="tag">Network Security</span>
            </div>
            <div className="links" style={{ marginTop: '16px' }}>
              <a
                href="https://tryhackme.com/p/balajivinothkumar08"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                🎯 TryHackMe Profile
              </a>
            </div>
          </div>

          {/* LeetCode */}
          <div className="summary-box profile-card fade-in-section">
            <div>
              <h3>LeetCode</h3>
              <p className="profile-metric">
                Active Problem Solving (Python) | Data Structures & Algorithms
              </p>
              <p>
                Solving algorithmic challenges in Python focusing on arrays, dynamic programming, trees, graphs, and core problem-solving techniques.
              </p>
            </div>
            <div className="links" style={{ marginTop: '16px' }}>
              <a
                href="https://leetcode.com/u/BalajiCode08/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                LeetCode Profile
              </a>
            </div>
          </div>

          {/* GeeksforGeeks */}
          <div className="summary-box profile-card fade-in-section">
            <div>
              <h3>GeeksforGeeks</h3>
              <p className="profile-metric">
                Core Algorithmic Challenges & Practice
              </p>
              <p>
                Practicing computer science fundamentals, data structure implementations, and core backend logic.
              </p>
            </div>
            <div className="links" style={{ marginTop: '16px' }}>
              <a
                href="https://www.geeksforgeeks.org/profile/balaji_v08"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                GeeksforGeeks Profile
              </a>
            </div>
          </div>

          {/* HackerRank */}
          <div className="summary-box profile-card fade-in-section">
            <div>
              <h3>HackerRank</h3>
              <p className="profile-metric">
                Problem Solving & Python Assessments
              </p>
              <p>
                Completing domain-specific skill assessments, algorithms, and Python programming certifications.
              </p>
            </div>
            <div className="links" style={{ marginTop: '16px' }}>
              <a
                href="https://www.hackerrank.com/profile/vjb08"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                HackerRank Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dsa;