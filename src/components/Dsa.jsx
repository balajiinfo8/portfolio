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
          <div className="summary-box profile-card thm-card fade-in-section">
            <div>
              <div className="profile-card-header">
                <span className="thm-badge">🎯 Top 15% Global Rank</span>
                <h3>TryHackMe</h3>
              </div>
              <p className="profile-metric">
                Global Top 15% | 48+ Rooms Solved | Level 0x8
              </p>
              <p>
                Actively solving CTF challenges, penetration testing labs, and web application security rooms on TryHackMe.
              </p>
              <div className="tag-row" style={{ marginTop: '12px' }}>
                <span className="tag">CTF (Pickle Rick)</span>
                <span className="tag">Pentesting</span>
                <span className="tag">Web Attack Detection</span>
                <span className="tag">Network Security</span>
              </div>
            </div>
            <div className="links" style={{ marginTop: '20px' }}>
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
              <div className="profile-card-header">
                <span className="platform-badge">💡 Algorithmic Practice</span>
                <h3>LeetCode</h3>
              </div>
              <p className="profile-metric">
                Active Problem Solving (Python) | Data Structures & Algorithms
              </p>
              <p>
                Solving algorithmic challenges in Python focusing on arrays, dynamic programming, trees, graphs, and system design concepts.
              </p>
              <div className="tag-row" style={{ marginTop: '12px' }}>
                <span className="tag">Arrays & Hashing</span>
                <span className="tag">Dynamic Programming</span>
                <span className="tag">Trees & Graphs</span>
                <span className="tag">Python 3</span>
              </div>
            </div>
            <div className="links" style={{ marginTop: '20px' }}>
              <a
                href="https://leetcode.com/u/BalajiCode08/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                💻 LeetCode Profile
              </a>
            </div>
          </div>

          {/* GeeksforGeeks */}
          <div className="summary-box profile-card fade-in-section">
            <div>
              <div className="profile-card-header">
                <span className="platform-badge">📚 CS Fundamentals</span>
                <h3>GeeksforGeeks</h3>
              </div>
              <p className="profile-metric">
                Core Algorithmic Challenges & Practice
              </p>
              <p>
                Practicing core computer science fundamentals, data structure implementations, and algorithmic problem-solving logic.
              </p>
              <div className="tag-row" style={{ marginTop: '12px' }}>
                <span className="tag">Data Structures</span>
                <span className="tag">Algorithms</span>
                <span className="tag">CS Concepts</span>
                <span className="tag">Backend Logic</span>
              </div>
            </div>
            <div className="links" style={{ marginTop: '20px' }}>
              <a
                href="https://www.geeksforgeeks.org/profile/balaji_v08"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                💚 GeeksforGeeks Profile
              </a>
            </div>
          </div>

          {/* HackerRank */}
          <div className="summary-box profile-card fade-in-section">
            <div>
              <div className="profile-card-header">
                <span className="platform-badge">🏆 Skill Certification</span>
                <h3>HackerRank</h3>
              </div>
              <p className="profile-metric">
                Problem Solving & Python Assessments
              </p>
              <p>
                Completing domain-specific skill assessments, algorithms, and verified Python programming certifications.
              </p>
              <div className="tag-row" style={{ marginTop: '12px' }}>
                <span className="tag">Python Certificate</span>
                <span className="tag">Problem Solving</span>
                <span className="tag">Algorithmic Tests</span>
                <span className="tag">Logic Verification</span>
              </div>
            </div>
            <div className="links" style={{ marginTop: '20px' }}>
              <a
                href="https://www.hackerrank.com/profile/vjb08"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                ⭐ HackerRank Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dsa;