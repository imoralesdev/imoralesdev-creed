// --- Soldier's Creed text (official lines) ---
const creedLines = [
  "I am an American Soldier.",
  "I am a warrior and a member of a team.",
  "I serve the people of the United States and live the Army Values.",
  "I will always place the mission first.",
  "I will never accept defeat.",
  "I will never quit.",
  "I will never leave a fallen comrade.",
  "I am disciplined, physically and mentally tough, trained and proficient in my warrior tasks and drills.",
  "I always maintain my arms, my equipment and myself.",
  "I am an expert and I am a professional.",
  "I stand ready to deploy, engage, and destroy the enemies of the United States of America in close combat.",
  "I am a guardian of freedom and the American way of life.",
  "I am an American Soldier."
];

const fullCreed = creedLines.join(" ");

// --- DOM references ---
const modeButtons = document.querySelectorAll(".mode-btn");
const modeStudy = document.getElementById("mode-study");
const modeType = document.getElementById("mode-type");
const modeOrder = document.getElementById("mode-order");

const creedTextEl = document.getElementById("creed-text");
const userInputEl = document.getElementById("user-input");
const compareOutputEl = document.getElementById("compare-output");

const statusSummaryEl = document.getElementById("status-summary");
const progressFillEl = document.getElementById("progress-fill");

const statAccuracyEl = document.getElementById("stat-accuracy");
const statErrorsEl = document.getElementById("stat-errors");
const statCoverageEl = document.getElementById("stat-coverage");

const lineGameEl = document.getElementById("line-game");
const lineProgressEl = document.getElementById("line-progress");
const btnResetLines = document.getElementById("btn-reset-lines");

const btnShowAnswer = document.getElementById("btn-show-answer");

let currentMode = "study";
let showAnswer = false;

// --- Render Study Mode text ---
function renderStudy() {
  creedTextEl.innerHTML = creedLines
    .map(
      (line, idx) =>
        `<div class="creed-line"><strong>Line ${
          idx + 1
        }:</strong> ${line}</div>`
    )
    .join("");
}

renderStudy();

// --- Mode switching ---
function setMode(mode) {
  currentMode = mode;
  modeButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.mode === mode);
  });

  modeStudy.style.display = mode === "study" ? "block" : "none";
  modeType.style.display = mode === "type" ? "block" : "none";
  modeOrder.style.display = mode === "order" ? "block" : "none";
}

modeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    setMode(btn.dataset.mode);
  });
});

// --- Helper: compare text ---
function compareUserInput() {
  const user = userInputEl.value.trim();
  if (!user) {
    compareOutputEl.textContent =
      "Start typing and I'll compare it to the official creed.";
    updateStats(0, 0, 0);
    updateOverallProgress(0.0);
    return;
  }

  const userWords = user.split(/\s+/);
  const targetWords = fullCreed.split(/\s+/);

  const maxLen = Math.max(userWords.length, targetWords.length);
  let correct = 0;
  let errors = 0;

  const html = [];
  for (let i = 0; i < maxLen; i++) {
    const u = userWords[i];
    const t = targetWords[i];
    if (u === undefined) break;
    if (t === undefined) {
      errors++;
      html.push(`<span class="word extra">${u}</span>`);
      continue;
    }
    if (u === t) {
      correct++;
      html.push(`<span class="word correct">${u}</span>`);
    } else {
      errors++;
      html.push(`<span class="word wrong">${u}</span>`);
    }
  }

  compareOutputEl.innerHTML = html.join(" ");

  const accuracy = correct + errors === 0 ? 0 : (correct / (correct + errors)) * 100;
  const coverage = (userWords.length / targetWords.length) * 100;

  updateStats(accuracy, errors, coverage);
  updateOverallProgress(accuracy * 0.6 + Math.min(coverage, 100) * 0.4);
}

function updateStats(accuracy, errors, coverage) {
  statAccuracyEl.textContent = `Accuracy: ${accuracy.toFixed(1)}%`;
  statErrorsEl.textContent = `Errors: ${errors}`;
  statCoverageEl.textContent = `Coverage: ${coverage.toFixed(1)}%`;
}

function updateOverallProgress(score) {
  const clamped = Math.max(0, Math.min(100, score));
  progressFillEl.style.width = clamped + "%";
  statusSummaryEl.textContent = `${clamped.toFixed(
    0
  )}% memorized (rough estimate)`;
}

if (userInputEl) {
  userInputEl.addEventListener("input", compareUserInput);
}

// --- Line Order Game ---
let currentLineIndex = 0;
let streakCorrect = 0;

function shuffleArray(arr) {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function renderLineGame() {
  currentLineIndex = 0;
  streakCorrect = 0;
  const shuffled = shuffleArray(creedLines);
  lineGameEl.innerHTML = "";
  shuffled.forEach((line) => {
    const btn = document.createElement("button");
    btn.className = "line-btn";
    btn.textContent = line;
    btn.addEventListener("click", () => handleLineClick(btn, line));
    lineGameEl.appendChild(btn);
  });
  updateLineProgress();
}

function handleLineClick(btn, line) {
  const correctLine = creedLines[currentLineIndex];
  if (line === correctLine) {
    btn.classList.remove("wrong");
    btn.classList.add("correct");
    btn.disabled = true;
    currentLineIndex++;
    streakCorrect++;
    if (currentLineIndex >= creedLines.length) {
      lineProgressEl.textContent =
        "Perfect! You completed the creed in order. Do it again!";
      updateOverallProgress(100);
    } else {
      updateLineProgress();
      const progressScore =
        (currentLineIndex / creedLines.length) * 100 * 0.7 +
        Math.min(streakCorrect, creedLines.length) * (30 / creedLines.length);
      updateOverallProgress(progressScore);
    }
  } else {
    btn.classList.add("wrong");
    streakCorrect = 0;
    updateLineProgress(true);
  }
}

function updateLineProgress(wrong = false) {
  const done = currentLineIndex;
  const total = creedLines.length;
  const nextLine = creedLines[currentLineIndex] || "Finished!";
  if (wrong) {
    lineProgressEl.textContent = `Wrong line. Next correct line should be: "${nextLine}"`;
  } else {
    lineProgressEl.textContent = `Correct in order: ${done}/${total} | Next: "${nextLine}"`;
  }
}

if (btnResetLines) {
  btnResetLines.addEventListener("click", renderLineGame);
}

// --- Show / hide full text hint ---
if (btnShowAnswer) {
  btnShowAnswer.addEventListener("click", () => {
    showAnswer = !showAnswer;
    if (showAnswer) {
      btnShowAnswer.textContent = "Hide Full Text Hint";
      creedTextEl.style.maxHeight = "none";
      creedTextEl.style.opacity = "1";
    } else {
      btnShowAnswer.textContent = "Toggle Full Text Hint";
      creedTextEl.style.maxHeight = "0";
      creedTextEl.style.opacity = "0.3";
    }
  });
}

// Initialize line game
renderLineGame();
