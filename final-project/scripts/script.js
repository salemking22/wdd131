document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const messageField = document.getElementById("message");
  const charCount = document.getElementById("charCount");

  messageField.addEventListener("input", () => {
    charCount.textContent = `Characters: ${messageField.value.length}`;
  });

  const savedData = JSON.parse(localStorage.getItem("contactForm"));
  if (savedData) {
    nameField.value = savedData.name || "";
    emailField.value = savedData.email || "";
    messageField.value = savedData.message || "";
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = {
      name: nameField.value,
      email: emailField.value,
      message: messageField.value,
    };
    localStorage.setItem("contactForm", JSON.stringify(formData));
    alert("Message saved locally!");
    form.reset();
    charCount.textContent = "Characters: 0";
  });
});
