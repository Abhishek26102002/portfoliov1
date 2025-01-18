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
const mousegrowElements = document.querySelectorAll('.mousegrow');

// Select the cursor circle
const cursorCircle1 = document.querySelector('.cursor-circle');



// Add event listeners to each .mousegrow element to change the cursor size on hover
mousegrowElements.forEach((element) => {
  element.addEventListener('mouseenter', () => {
    cursorCircle1.style.width = '80px'; // Grow the cursor circle
    cursorCircle1.style.height = '80px';
    cursorCircle1.style.top = '-33px'; // Grow the cursor circle
    cursorCircle1.style.left = '-33px';
  });

  element.addEventListener('mouseleave', () => {
    cursorCircle1.style.width = '40px'; // Reset the cursor circle size
    cursorCircle1.style.height = '40px';
    cursorCircle1.style.top = '-16px'; // Grow the cursor circle
    cursorCircle1.style.left = '-16px';
  });
});


  //Doc end
});
