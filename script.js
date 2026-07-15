document.addEventListener('DOMContentLoaded', () => {
  const themeButton = document.getElementById("theme-toggle");
  const navLinks = document.getElementById('nav-links');
  const hamburgerButton = document.getElementById('hamburger-button');

  // --- Theme Toggling Logic ---
  function applyTheme(theme) {
    if (theme === 'light') {
      document.body.classList.remove('dark-theme');
      themeButton.textContent = "🌛";
    } else {
      document.body.classList.add('dark-theme');
      themeButton.textContent = "🌞";
    }
  }

  themeButton.addEventListener("click", () => {
    const isDark = document.body.classList.contains('dark-theme');
    const newTheme = isDark ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });

  // Apply saved theme on page load
  const savedTheme = localStorage.getItem('theme') || 'dark'; // Default to dark
  applyTheme(savedTheme);

  // --- Responsive Navigation Logic ---
  hamburgerButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // --- Live Date & Time Widget ---
  const clockDateEl = document.getElementById('clock-date');
  const clockTimeEl = document.getElementById('clock-time');

  if (clockDateEl && clockTimeEl) {
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

    function updateClock() {
      const now = new Date();
      clockDateEl.textContent = dateFormatter.format(now);
      clockTimeEl.textContent = timeFormatter.format(now);
    }

    updateClock();
    setInterval(updateClock, 1000);
  }
});
