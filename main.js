// Animation
const words = ["Frontend", "Backend", "Fullstack", "Web Apps", "APIs", "Mobile Apps"];
const dynamicText = document.getElementById("dynamic-text");

let currentWordIndex = 0;

// Function to generate random gibberish
function generateGibberish(length) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-=_+[]{}|;:',.<>?/";
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
