const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < window.innerHeight - 80) {
      element.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

const skillFills = document.querySelectorAll('.skill-fill');

skillFills.forEach((fill, index) => {
  const width = fill.getAttribute('data-width');
  setTimeout(() => {
    fill.style.width = `${width}%`;
  }, 120 * index);
});
