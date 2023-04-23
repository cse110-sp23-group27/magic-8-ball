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

const answerEl = document.querySelector(".answer");
const questionInput = document.querySelector(".question-input");
const shakeBtn = document.querySelector(".shake-btn");

function shake() {
  answerEl.style.opacity = 0;
  setTimeout(getAnswer, 500);
}

function getAnswer() {
  const randomIndex = Math.floor(Math.random() * answers.length);
  answerEl.innerHTML = answers[randomIndex];
  answerEl.style.opacity = 1;
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    shake();
  }
}

shakeBtn.addEventListener("click", shake);
questionInput.addEventListener("keypress", handleKeyPress);
