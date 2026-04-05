// Toggle mobile nav
function toggleNav() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('open');
}

// Close nav on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('open');
  });
});

// Smooth scroll for Visit Us (anchor to footer)
document.querySelectorAll('a[href="#footer"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fade-in on scroll
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Apply fade-in to sections
document.querySelectorAll(
  '.feature-card, .specialty-card, .value-card, .review-card, .bowl-card, .menu-block'
).forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
