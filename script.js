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
});