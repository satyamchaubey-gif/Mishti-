const questions = [
  {
    question: "Who am I to you?",
    options: ["Friend", "Classmate"],
    answer: "Classmate"
  },
  {
    question: "What's my DOB?",
    options: ["16/10", "28/12"],
    answer: "28/12"
  },
  {
    question: "Gol gappe or momo?",
    options: ["Gol gappe", "Momo"],
    answer: "Gol gappe"
  },
  {
    question: "Pick a birthday vibe!",
    options: ["Cake & photos", "Music & masti"],
    answer: "Cake & photos"
  }
];

let current = 0;
let answered = false;

const question = document.getElementById("question");
const options = document.getElementById("options");
const feedback = document.getElementById("feedback");
const next = document.getElementById("next");

function renderQuestion() {
  answered = false;

  const item = questions[current];
  question.textContent =
    `${current + 1}. ${item.question}`;

  options.innerHTML = "";
  feedback.textContent = "";
  next.disabled = true;

  item.options.forEach(choice => {
    const button = document.createElement("button");

    button.textContent = choice;
    button.className = "quiz-option";

    button.onclick = () => {
      if (answered) return;

      answered = true;

      [...options.children].forEach(option => {
        option.disabled = true;

        if (option.textContent === item.answer) {
          option.classList.add("correct");
        }
      });

      if (choice !== item.answer) {
        button.classList.add("selected");
        feedback.textContent =
          "Oops! Not quite — try the next one ♡";
      } else {
        feedback.textContent =
          "Correct! You know me well! ✨";
      }

      next.disabled = false;
    };

    options.appendChild(button);
  });

  next.textContent =
    current === questions.length - 1
      ? "Finish quiz ♡"
      : "Next question →";
}

next.addEventListener("click", () => {
  if (next.disabled) return;

  if (current < questions.length - 1) {
    current++;
    renderQuestion();
  } else {
    question.textContent =
      "Thanks for playing, Mishti! 🎂";

    options.innerHTML = "";
    feedback.textContent =
      "Happy Birthday! Hope your day is full of laughter and lovely memories. ♡";

    next.hidden = true;
  }
});

renderQuestion();