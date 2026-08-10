document.getElementById('year').textContent = new Date().getFullYear();

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-header nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const enquiryForm = document.getElementById('enquiry-form');
const formStatus = document.getElementById('form-status');

if (enquiryForm && formStatus) {
  enquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formStatus.textContent = 'Enquiry system is being activated. Please contact Akshay directly by email or WhatsApp.';
  });
}
