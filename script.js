const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');
const currentYear = document.getElementById('currentYear');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      formFeedback.textContent = 'Please fill in all fields before sending.';
      formFeedback.style.color = '#b12f28';
      return;
    }

    formFeedback.textContent = 'Thank you! Your message has been sent.';
    formFeedback.style.color = '#1f7d45';
    contactForm.reset();
  });
}

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
