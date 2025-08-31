const form = document.getElementById("feedbackForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const rating = document.getElementById("rating").value;
  const message = document.getElementById("message").value.trim();

  if (name && email && rating && message) {
    successMessage.style.display = "block";
    form.reset();
  }
});
