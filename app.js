document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".magnetic-button");
  const container = document.querySelector(".magnetic-button-container");

  container.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Apply a magnetic effect
    button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });

  // Reset button position when the mouse leaves
  container.addEventListener("mouseleave", () => {
    button.style.transform = "translate(0, 0)";
  });
  const button1 = document.querySelector(".mbbbb3");
  const container2 = document.querySelector(".mbbbb2");

  container2.addEventListener("mousemove", (e) => {
    const rect = button1.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 1;
    const y = e.clientY - rect.top - rect.height / 1;

    // Apply a magnetic effect
    button1.style.transform = `translate(${x * 0.7}px, ${y * 0.7}px)`;
  });

  // Reset button position when the mouse leaves
  container2.addEventListener("mouseleave", () => {
    button1.style.transform = "translate(0, 0)";
  });

  const cursorDot = document.querySelector(".cursor-dot");
  const cursorCircle = document.querySelector(".cursor-circle");

  let mouseX = 0;
  let mouseY = 0;
  let circleX = 0;
  let circleY = 0;

  // Update cursor positions on mousemove
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  // Smoothly move the circle cursor after a delay
  function animateCircle() {
    const deltaX = mouseX - circleX;
    const deltaY = mouseY - circleY;

    circleX += deltaX * 0.1; // Adjust smoothness
    circleY += deltaY * 0.1;

    cursorCircle.style.transform = `translate(${circleX}px, ${circleY}px)`;
    setTimeout(() => requestAnimationFrame(animateCircle), 8); // Add delay
  }

  animateCircle();

  const cards = document.querySelectorAll(".card3D");

  if (cards.length === 0) return; // Ensure there are cards to apply the effect

  cards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      // Get card dimensions and position
      const cardRect = card.getBoundingClientRect();

      // Calculate rotation values
      const xAxis =
        ((event.clientX - cardRect.left) / cardRect.width - 0.5) * 90; // Adjust multiplier for more or less rotation
      const yAxis =
        ((event.clientY - cardRect.top) / cardRect.height - 0.5) * -90;

      // Apply transform for 3D effect
      card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      // Reset the 3D effect when the mouse leaves the card
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  });

  // Select all elements with the class 'mousegrow' using querySelectorAll
  // Select all elements with the class 'mousegrow'
  const mousegrowElements = document.querySelectorAll(".mousegrow");

  // Select the cursor circle
  const cursorCircle1 = document.querySelector(".cursor-circle");

  // Add event listeners to each .mousegrow element to change the cursor size on hover
  mousegrowElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursorCircle1.style.width = "80px"; // Grow the cursor circle
      cursorCircle1.style.height = "80px";
      cursorCircle1.style.top = "-33px"; // Grow the cursor circle
      cursorCircle1.style.left = "-33px";
    });

    element.addEventListener("mouseleave", () => {
      cursorCircle1.style.width = "40px"; // Reset the cursor circle size
      cursorCircle1.style.height = "40px";
      cursorCircle1.style.top = "-16px"; // Grow the cursor circle
      cursorCircle1.style.left = "-16px";
    });
  });

  //
  // Animation
  const words = [
    "Frontend",
    "Backend",
    "Fullstack",
    "Web Apps",
    "APIs",
    "Mobile Apps",
  ];
  const dynamicText = document.getElementById("dynamic-text");

  let currentWordIndex = 0;

  // Function to generate random gibberish
  function generateGibberish(length) {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-=_+[]{}|;:',.<>?/";
    let gibberish = "";
    for (let i = 0; i < length; i++) {
      gibberish += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return gibberish;
  }

  // Function to smoothly resolve gibberish into the target word
  function resolveGibberish(word, callback) {
    let gibberish = generateGibberish(word.length);
    dynamicText.textContent = gibberish;

    let iterations = 0;
    const maxIterations = 10; // Total iterations for smooth transition
    const interval = setInterval(() => {
      iterations++;
      gibberish = gibberish
        .split("")
        .map((char, index) => {
          if (Math.random() > 0.5 && iterations < maxIterations) {
            // Randomly keep gibberish during the initial phase
            return generateGibberish(1);
          }
          // Gradually replace with correct characters
          return iterations >= maxIterations || Math.random() > 0.7
            ? word.charAt(index)
            : char;
        })
        .join("");

      dynamicText.textContent = gibberish;

      // End animation when the word is fully resolved
      if (gibberish === word) {
        clearInterval(interval);
        callback();
      }
    }, 100); // Smooth update interval
  }

  // Function to start the typing animation loop
  function startTyping() {
    function typeNextWord() {
      resolveGibberish(words[currentWordIndex], () => {
        currentWordIndex = (currentWordIndex + 1) % words.length;
        setTimeout(typeNextWord, 2000); // Pause before showing the next word
      });
    }
    typeNextWord();
  }

  // Start the animation
  startTyping();

  //
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
      const toast = document.getElementById("toast");
      if (loadingSpinner) {
        loadingSpinner.style.display = "flex"; // Show spinner
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
          // alert("Your message has been sent successfully!");
          toast.style.display = "flex";
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

  const menuBtn = document.getElementById("menu-btn");
  const crossbtn = document.getElementById("cross-btn");
  const menu = document.getElementById("menu");

  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
   
  });


  //Doc end
});