const quiz = [
  {
    question: "Miden ka main focus kya hai?",
    options: ["Gaming", "Privacy & Scalability", "NFTs", "Memes"],
    answer: 1
  },
  {
    question: "Miden kis ecosystem se spin-out hua?",
    options: ["Solana", "Ethereum", "Polygon", "Avalanche"],
    answer: 2
  },
  {
    question: "Miden me execution kahan hoti hai?",
    options: ["On-chain", "Validator node", "Client-side", "Server"],
    answer: 2
  }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  optionsEl.innerHTML = "";
  scoreEl.innerText = "";

  const q = quiz[current];
  questionEl.innerText = q.question;

  q.options.forEach((opt, index) => {
    const div = document.createElement("div");
    div.classList.add("option");
    div.innerText = opt;
    div.onclick = () => checkAnswer(index);
    optionsEl.appendChild(div);
  });
}

function checkAnswer(index) {
  if (index === quiz[current].answer) {
    score++;
  }
  nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
  current++;
  nextBtn.style.display = "none";

  if (current < quiz.length) {
    loadQuestion();
  } else {
    questionEl.innerText = "🎉 Quiz Finished!";
    optionsEl.innerHTML = "";
    scoreEl.innerText = `Your Score: ${score} / ${quiz.length}`;
  }
};

loadQuestion();
