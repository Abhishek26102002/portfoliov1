document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS
  (function () {
    emailjs.init({
      publicKey: "Z-3pGmXBW5JjntrXJ",
    });
  })();

  // Ensure the DOM is fully loaded before executing the script
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission behavior

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Show loading spinner
      const loadingSpinner = document.getElementById("loadingSpinner");
      if (loadingSpinner) {
        loadingSpinner.style.display = "block"; // Show spinner
      }

      // Prepare the data to send via EmailJS
      const templateParams = {
        name: name,
        email: email,
        message: message,
      };

      // Send email using EmailJS
      emailjs.send("service_wpobzym", "template_4edcc7r", templateParams).then(
        function (response) {
          alert("Your message has been sent successfully!");
          console.log("Success:", response);
          // Hide the loading spinner
          if (loadingSpinner) {
            loadingSpinner.style.display = "none";
          }
        },
        function (error) {
          alert("Failed to send your message. Please try again later.");
          console.log("Error:", error);
          // Hide the loading spinner
          if (loadingSpinner) {
            loadingSpinner.style.display = "none";
          }
        }
      );
    });
});
