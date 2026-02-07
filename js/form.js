// Basic client-side form handling for the MVP landing page.
const form = document.getElementById("signup-form");
const emailInput = document.getElementById("email");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Simple required validation for email.
    if (!emailInput.value.trim()) {
      emailInput.focus();
      emailInput.setCustomValidity("Please enter your email address.");
      emailInput.reportValidity();
      return;
    }

    emailInput.setCustomValidity("");

    // Simulate submission.
    form.classList.add("is-submitted");

    // Redirect to thank-you page.
    window.location.href = "thanks.html";
  });
}
