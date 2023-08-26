// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      });
    });
  
    // Form submission
    const contactForm = document.getElementById('contact-form');
  
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      // Here, you can perform further actions like sending the form data to a server or displaying a success message.
      alert(`Thank you, ${name}! Your form has been submitted.`);
      // Clear form fields
      contactForm.reset();
    });
  });
  