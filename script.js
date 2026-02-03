const quizData = [
  {
    q: "Miden ka main focus kya hai?",
    o: ["Gaming", "Privacy & Scalability", "NFTs", "Ads"],
    a: 1
  },
  {
    q: "Miden kis ecosystem se spin-out hua?",
    o: ["Ethereum", "Polygon", "Solana", "Avalanche"],
    a: 1
  },
  {
    q: "Miden me execution kahan hoti hai?",
    o: ["On-chain", "Client-side", "Validator", "Server"],
    a: 1
  }
];

let index = 0;
let score = 0;

function startQuiz() {
  document.getElementById("quiz").classList.remove("hidden");
  loadQ();
  window.scrollTo(0, document.body.scrollHeight);
}

function loadQ() {
  const q = quizData[index];
  document.getElementById("question").innerText = q.q;
  const optDiv = document.getElementById("options");
  optDiv.innerHTML = "";

  q.o.forEach((opt, i) => {
    const d = document.createElement("div");
    d.className = "option";
    d.innerText = opt;
    d.onclick = () => {
      if (i === q.a) score++;
      document.getElementById("nextBtn").style.display = "block";
    };
    optDiv.appendChild(d);
  });
}

document.getElementById("nextBtn").onclick = () => {
  index++;
  if (index < quizData.length) {
    loadQ();
  } else {
    document.getElementById("question").innerText = "Quiz Finished 🎉";
    document.getElementById("options").innerHTML = "";
    document.getElementById("score").innerText =
      `Score: ${score}/${quizData.length}`;
  }
};
