const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.14 });
revealItems.forEach((item) => observer.observe(item));

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (event) => {
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

const sections = document.querySelectorAll('main section');
const links = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
  let current = 'home';
  sections.forEach((section) => { if (scrollY >= section.offsetTop - 170) current = section.id; });
  links.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
}, { passive: true });
