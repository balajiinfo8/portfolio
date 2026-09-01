const Dsa = () => {
  return (
    <section id="dsa">
      <div className="container">
        <h2 className="section-title">Coding & Problem Solving</h2>
        <p className="section-subtitle">
          Continuous algorithmic practice and practical security challenge platforms.
        </p>

        <div className="profiles-grid">
          {/* TryHackMe */}
          <div className="summary-box profile-card fade-in-section">
            <div>
              <div className="profile-card-header">
                <span className="profile-card-icon">🛡️</span>
                <span className="thm-badge font-mono">Top 15%</span>
              </div>
              <h3>TryHackMe</h3>
              <p className="profile-desc">
                48+ Security Rooms, Web Attack Detection, and Pentesting CTFs.
              </p>
            </div>
            <div className="links" style={{ marginTop: '20px' }}>
              <a
                href="https://tryhackme.com/p/balajivinothkumar08"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%', textAlign: 'center' }}
              >
                View THM Profile
              </a>
            </div>
          </div>

          {/* LeetCode */}
          <div className="summary-box profile-card fade-in-section">
            <div>
              <div className="profile-card-header">
                <span className="profile-card-icon">⚡</span>
                <span className="platform-badge font-mono">Python DSA</span>
              </div>
              <h3>LeetCode</h3>
              <p className="profile-desc">
                Algorithmic problem solving focusing on dynamic programming and graphs.
              </p>
            </div>
            <div className="links" style={{ marginTop: '20px' }}>
              <a
                href="https://leetcode.com/u/BalajiCode08/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: '100%', textAlign: 'center' }}
              >
                View LeetCode Profile
              </a>
            </div>
          </div>

          {/* GeeksforGeeks */}
          <div className="summary-box profile-card fade-in-section">
            <div>
              <div className="profile-card-header">
                <span className="profile-card-icon">🌿</span>
                <span className="platform-badge font-mono">Algorithms</span>
              </div>
              <h3>GeeksforGeeks</h3>
              <p className="profile-desc">
                Core data structures, tree traversals, and algorithmic problem sheets.
              </p>
            </div>
            <div className="links" style={{ marginTop: '20px' }}>
              <a
                href="https://www.geeksforgeeks.org/profile/balaji_v08"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: '100%', textAlign: 'center' }}
              >
                View GFG Profile
              </a>
            </div>
          </div>

          {/* HackerRank */}
          <div className="summary-box profile-card fade-in-section">
            <div>
              <div className="profile-card-header">
                <span className="profile-card-icon">🎖️</span>
                <span className="platform-badge font-mono">Verified</span>
              </div>
              <h3>HackerRank</h3>
              <p className="profile-desc">
                Standardized assessments in Python proficiency and SQL relational queries.
              </p>
            </div>
            <div className="links" style={{ marginTop: '20px' }}>
              <a
                href="https://www.hackerrank.com/profile/vjb08"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: '100%', textAlign: 'center' }}
              >
                View HackerRank
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dsa;