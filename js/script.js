document.addEventListener('DOMContentLoaded', function () {
  const navToggler = document.querySelector('.navbar-toggler');
  const navCollapse = document.getElementById('navbarNav');
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  const header = document.querySelector('.header');
  const links = document.querySelectorAll('a[href^="#"]');
  const animatedElements = document.querySelectorAll('[data-animate]');
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  navToggler.addEventListener('click', function () {
    navCollapse.classList.toggle('show');
    this.classList.toggle('collapsed');
  });

  window.addEventListener('scroll', function () {
    if (window.scrollY > 80) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }

    if (window.scrollY > 420) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  links.forEach((link) => {
    if (link.hash && document.querySelector(link.hash)) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        navCollapse.classList.remove('show');
        const targetElement = document.querySelector(this.hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    { threshold: 0.18 }
  );

  animatedElements.forEach((element) => {
    observer.observe(element);
  });

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const form = event.target;
    const fields = ['fullName', 'email', 'phone', 'message'];
    let hasError = false;

    fields.forEach((fieldName) => {
      const field = form.elements[fieldName];
      if (!field.value.trim()) {
        field.classList.add('is-invalid');
        hasError = true;
      } else {
        field.classList.remove('is-invalid');
      }
    });

    const emailField = form.elements.email;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailField.value && !emailPattern.test(emailField.value)) {
      emailField.classList.add('is-invalid');
      hasError = true;
    }

    if (hasError) {
      formStatus.textContent = 'Please complete the form before sending.';
      formStatus.style.color = '#d0342c';
      return;
    }

    formStatus.textContent = 'Thank you! Your message has been received.';
    formStatus.style.color = 'var(--primary)';
    form.reset();
  });
});
