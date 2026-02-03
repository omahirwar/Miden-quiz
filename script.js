const quizData = [
  { q: "What is Miden focused on?", o: ["Gaming", "Privacy & Scalability", "NFTs", "Ads"], a: 1 },
  { q: "Miden is a spin-off from?", o: ["Ethereum", "Polygon Labs", "Solana", "Avalanche"], a: 1 },
  { q: "Which tech enables privacy in Miden?", o: ["Oracles", "ZK Proofs", "Sidechains", "Bridges"], a: 1 },
  { q: "Where does execution happen?", o: ["On-chain", "Client-side", "Server", "Validator"], a: 1 },
  { q: "Which transactions does Miden support?", o: ["Public only", "Private only", "Both", "None"], a: 2 },
  { q: "Who invested in Miden?", o: ["FTX", "a16z crypto", "Coinbase", "Binance"], a: 1 },
  { q: "What does client-side execution improve?", o: ["Fees", "Privacy & scale", "Centralization", "Latency"], a: 1 },
  { q: "Why is testnet participation important?", o: ["Fun", "Airdrop rewards", "Ads", "Spam"], a: 1 },
  { q: "What matters most for rewards?", o: ["Bots", "Real usage", "Paid ads", "Volume"], a: 1 },
  { q: "Miden is building for?", o: ["Gaming", "Compliant finance", "Memes", "Social"], a: 1 }
];

let index = 0;
let score = 0;

const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const options = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const progress = document.getElementById("progress");
const result = document.getElementById("result");

function startQuiz() {
  quiz.classList.remove("hidden");
  window.scrollTo({ top: quiz.offsetTop, behavior: "smooth" });
  load();
}

function load() {
  const q = quizData[index];
  progress.innerText = `Question ${index + 1} of ${quizData.length}`;
  question.innerText = q.q;
  options.innerHTML = "";
  nextBtn.classList.add("hidden");

  q.o.forEach((opt, i) => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerText = opt;
    div.onclick = () => {
      if (i === q.a) score++;
      nextBtn.classList.remove("hidden");
    };
    options.appendChild(div);
  });
}

nextBtn.onclick = () => {
  index++;
  if (index < quizData.length) load();
  else {
    question.innerText = "Quiz Completed 🎉";
    options.innerHTML = "";
    progress.innerText = "";
    result.innerText = `Score: ${score} / ${quizData.length}`;
  }
};
