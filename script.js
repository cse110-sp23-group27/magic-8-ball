/**
 * An array of possible answers for the Magic 8 Ball.
 */
const answers = [
  "It is certain.",
  "Without a doubt.",
  "You may rely on it.",
  "Yes, definitely.",
  "It is decidedly so.",
  "As I see it, yes.",
  "Most likely.",
  "Yes.",
  "Outlook good.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Better not tell you now.",
  "Ask again later.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "Outlook not so good.",
  "My sources say no.",
  "Very doubtful.",
  "My reply is no."
];

/**
 * The DOM element where the Magic 8 Ball answer will be displayed.
 */
const answerEl = document.querySelector(".answer");

/**
 * The DOM element representing the input field where the user types their question.
 */
const questionInput = document.querySelector(".question-input");

/**
 * The DOM element representing the shake button.
 */
const shakeBtn = document.querySelector(".shake-btn");

/**
 * The DOM element representing the Magic 8 Ball itself.
 */
const eightBall = document.querySelector(".eight-ball");

/**
 * Defining the shaking sounds
 */
const sounds = ["audio/Shaking 1.wav", "audio/Shaking 2.wav", "audio/Shaking 3.wav", 
  "audio/Shaking 4.wav", "audio/Shaking 5.wav", "audio/Shaking 6.wav", "audio/Shaking 7.wav"]

/**
 * Shakes the Magic 8 Ball and displays a random answer after a brief delay.
 */
function shake() {
  if (questionInput.value !== "") {
    // Add the "shaking" class to the Magic 8 Ball to initiate the shaking animation.
    eightBall.classList.add("shaking");
    
    // Play a random shaking sound
    const randomSoundIndex = Math.floor(Math.random() * sounds.length);
    const sound = new Audio(sounds[randomSoundIndex]);
    sound.play();

    // Keep track of how many times the answer has been updated.
    let count = 0;

    // Every 100ms, display a random answer from the answer bank.
    const interval = setInterval(function() {
      count++;
      const randomIndex = Math.floor(Math.random() * answers.length);
      // Change the style of the answers and set the html of the answer class to the answers themselves
      answerEl.style.fontSize = "30px";
      answerEl.style.fontWeight = "normal";
      answerEl.innerHTML = answers[randomIndex];

      // After 10 updates, stop the interval and remove the "shaking" class from the Magic 8 Ball.
      if (count === 10) {
        clearInterval(interval);
        eightBall.classList.remove("shaking");
        answerEl.innerHTML = answers[randomIndex];
        questionInput.value = "";
      }
    }, 100);
  }
}

/**
 * Generates a random answer from the answer bank and displays it immediately.
 */
function getAnswer() {
  const randomIndex = Math.floor(Math.random() * answers.length);
  answerEl.innerHTML = answers[randomIndex];
}

/**
 * Handles the "Enter" keypress event on the question input field, triggering the shake function.
 * @param {Event} event - The keypress event.
 */
function handleKeyPress(event) {
  if (event.key === "Enter") {
    shake();
  }
}

// Enable/disable the shake button based on whether there is text in the input field.
questionInput.addEventListener("input", function() {
  if (questionInput.value === "") {
    shakeBtn.disabled = true;
  } else {
    shakeBtn.disabled = false;
  }
});

// Call the shake function when the shake button is clicked.
shakeBtn.addEventListener("click", shake);

// Call the handleKeyPress function when a key is pressed on the question input field.
questionInput.addEventListener("keypress", handleKeyPress);