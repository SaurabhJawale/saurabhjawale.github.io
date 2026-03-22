// Smooth Scroll
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Sticky nav shadow on scroll
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    nav.style.boxShadow = "0 2px 6px rgba(0,0,0,0.05)";
  } else {
    nav.style.boxShadow = "none";
  }
});
