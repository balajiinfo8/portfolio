document.addEventListener('DOMContentLoaded', () => {
  const themeButton = document.getElementById("theme-toggle");
  const navLinks = document.getElementById('nav-links');
  const hamburgerButton = document.getElementById('hamburger-button');

  // --- Theme Toggling Logic ---
  function applyTheme(theme) {
    if (theme === 'light') {
      document.body.classList.remove('dark-theme');
      if (themeButton) {
        themeButton.textContent = "🌛";
      }
    } else {
      document.body.classList.add('dark-theme');
      if (themeButton) {
        themeButton.textContent = "🌞";
      }
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
  if (hamburgerButton && navLinks) {
    hamburgerButton.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

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

  // --- Scroll Animation Logic ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, {
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the element is visible
  });

  const sectionsToAnimate = document.querySelectorAll('.fade-in-section');
  sectionsToAnimate.forEach(section => {
    observer.observe(section);
  });

  // --- Typing Animation for Hero Title ---
  const heroTitle = document.getElementById('hero-title');
  if (heroTitle) {
    const text = "Building Backend Solutions with Python";
    let index = 0;
    heroTitle.classList.add('typing-effect');

    function type() {
      if (index < text.length) {
        heroTitle.textContent += text.charAt(index);
        index++;
        setTimeout(type, 60); // Adjust typing speed here
      } else {
        heroTitle.classList.remove('typing-effect'); // Remove cursor when done
      }
    }
    type();
  }

  // --- Auto-update Footer Date ---
  const lastUpdatedEl = document.getElementById('last-updated');
  if (lastUpdatedEl) {
    const lastModified = new Date(document.lastModified);
    const formattedDate = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long'
    }).format(lastModified);
    lastUpdatedEl.textContent = formattedDate;
  }

});
