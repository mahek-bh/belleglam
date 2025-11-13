document.addEventListener('DOMContentLoaded', () => {
  /* 1. Hamburger Menu Toggle */
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      // Toggle hamburger icon to 'X'
      if (navLinks.classList.contains('active')) {
        navToggle.innerHTML = '✕';
      } else {
        navToggle.innerHTML = '☰';
      }
    });
  }

  /* 2. Scroll Fade-in Animation */
  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px', // Start animation 50px before it's fully in view
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });
});
