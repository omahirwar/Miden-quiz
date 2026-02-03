const heroBtn = document.querySelector(".hero-btn");
const quizSec = document.querySelector(".quiz-container");

heroBtn.onclick = () => {
  quizSec.classList.remove("hidden");
};

const quiz = [
  {
    question: "Miden ka main focus kya hai?",
    options: ["Privacy", "NFT", "Gaming", "Ads"],
    answer: 0
  },
  {
    question: "Miden kaha se spin-out hua?",
    options: ["Polygon", "Solana", "Cardano", "Avalanche"],
    answer: 0
  }
];

let current = 0;
let score = 0;

function loadQ() {
  document.getElementById("question").innerText = quiz[current].question;
  const opts = quiz[current].options;
  const container = document.getElementById("options");
  container.innerHTML = "";
  opts.forEach((o, i) => {
    const div = document.createElement("div");
    div.classList.add("option");
    div.innerText = o;
    div.onclick = () => {
      if (i === quiz[current].answer) score++;
      document.getElementById("nextBtn").style.display = "block";
    };
    container.appendChild(div);
  });
}

document.getElementById("nextBtn").onclick = () => {
  current++;
  if (current < quiz.length) loadQ();
  else alert("Quiz Over! Score: " + score);
};

loadQ();
