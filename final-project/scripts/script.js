document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  // Load saved data into form fields
  loadFormData();

  // Listen for form submission
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!validateForm(name, email, message)) {
      alert('Please enter a valid name (2+ chars), valid email, and message (10+ chars).');
      return;
    }

    saveFormData(name, email, message);
    showConfirmation(name);
  });

  function loadFormData() {
    const savedData = JSON.parse(localStorage.getItem('contactFormData')) || {};
    form.name.value = savedData.name || '';
    form.email.value = savedData.email || '';
    form.message.value = savedData.message || '';
  }

  function saveFormData(name, email, message) {
    const formData = { name, email, message };
    localStorage.setItem('contactFormData', JSON.stringify(formData));
  }

  function validateForm(name, email, message) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return name.length >= 2 && emailRegex.test(email) && message.length >= 10;
  }

  function showConfirmation(name) {
    const confirmation = `
      <p>Thank you, <strong>${name}</strong>! Your message has been received.</p>
    `;
    form.innerHTML = confirmation;
  }
});
