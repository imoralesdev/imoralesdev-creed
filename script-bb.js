// Blue Book multiple-choice questions + Terrain Features
// Each object: question, options, correctIndex, category, explanation

const questions = [
  // ===== ARMY VALUES =====
  {
    category: "Army Values",
    question: "In the Army Values acronym LDRSHIP, what does the 'L' stand for?",
    options: ["Loyalty", "Leadership", "Liberty", "Lawfulness"],
    correctIndex: 0,
    explanation:
      "LDRSHIP = Loyalty, Duty, Respect, Selfless Service, Honor, Integrity, Personal Courage."
  },
  {
    category: "Army Values",
    question:
      "Which Army Value is best described as putting the welfare of the nation, the Army, and your subordinates before your own?",
    options: ["Honor", "Selfless Service", "Duty", "Respect"],
    correctIndex: 1,
    explanation:
      "Selfless Service means placing the welfare of the nation, the Army, and subordinates before your own."
  },
  {
    category: "Army Values",
    question:
      "Doing what is right, legally and morally, even when no one is watching, describes which Army Value?",
    options: ["Integrity", "Honor", "Respect", "Loyalty"],
    correctIndex: 0,
    explanation: "Integrity is doing what is right, legally and morally."
  },
  {
    category: "Army Values",
    question:
      "Which Army Value is most closely associated with treating people as they should be treated and recognizing their dignity?",
    options: ["Personal Courage", "Respect", "Duty", "Loyalty"],
    correctIndex: 1,
    explanation: "Respect is treating people as they should be treated."
  },

  // ===== BLUE BOOK & GENERAL =====
  {
    category: "Blue Book Basics",
    question:
      "What is a primary purpose of the 15th Signal Brigade Blue Book?",
    options: [
      "To replace AR 670-1 with new regulations",
      "To establish common standards for Soldiers in the 15th Signal Brigade",
      "To provide financial guidance to Soldiers",
      "To cover only off-post civilian dress codes"
    ],
    correctIndex: 1,
    explanation:
      "The Blue Book establishes common standards for Soldiers assigned to or training with the 15th Signal Brigade."
  },
  {
    category: "Blue Book Basics",
    question:
      "The standards in the 15th Signal Brigade Blue Book apply to which of the following?",
    options: [
      "Only permanent party NCOs",
      "Only Soldiers in Basic Combat Training",
      "AIT/IET Soldiers and permanent party on the installation",
      "Civilians only"
    ],
    correctIndex: 2,
    explanation:
      "The Blue Book applies to AIT/IET Soldiers and permanent party personnel on the installation."
  },

  // ===== CIVILIAN ATTIRE & DFAC =====
  {
    category: "Civilian Attire",
    question:
      "Which of the following is NOT authorized civilian attire on the installation according to the Blue Book?",
    options: [
      "Clean jeans and a plain T-shirt",
      "Shorts that are at least fingertip length",
      "Clothing with sexually explicit or extremist content",
      "A conservative, solid-color hoodie"
    ],
    correctIndex: 2,
    explanation:
      "The Blue Book prohibits clothing with profane, sexually explicit, racist, sexist, or extremist content."
  },
  {
    category: "Civilian Attire",
    question:
      "Which statement about footwear in the DFAC is correct for Soldiers in civilian attire?",
    options: [
      "Open-toe shoes without socks are not authorized in the DFAC",
      "Flip-flops are encouraged for comfort",
      "Bare feet are authorized in the DFAC",
      "Any footwear is acceptable as long as it is clean"
    ],
    correctIndex: 0,
    explanation:
      "Open-toe shoes without socks are not authorized in the DFAC per the Blue Book."
  },

  // ===== UNIFORMS & PHASE BADGES =====
  {
    category: "Uniforms",
    question:
      "Where is the phase badge worn on the ACU/IHWCU (OCP) coat in the 15th Signal Brigade?",
    options: [
      "Centered on the chest",
      "On the patrol cap",
      "On the left collar/lapel",
      "On the right sleeve above the unit patch"
    ],
    correctIndex: 2,
    explanation:
      "The phase badge is attached to the left collar/lapel of the OCP jacket."
  },
  {
    category: "Uniforms",
    question:
      "Which phase badge color correctly matches its phase in AIT?",
    options: [
      "Phase V – Blue badge",
      "Phase V+ – White badge",
      "Phase VI+ – Yellow badge",
      "Phase V – White, Phase V+ – Yellow, Phase VI+ – Blue"
    ],
    correctIndex: 3,
    explanation:
      "Phase V = White, Phase V+ = Yellow, Phase VI+ = Blue."
  },
  {
    category: "Uniforms",
    question:
      "Which statement about phase badges is correct according to the Blue Book?",
    options: [
      "Phase badges may be worn off post if concealed under a jacket",
      "Phase badges should be clipped to personal cell phones for convenience",
      "Phase badges are not worn off post and must not be attached to electronic devices",
      "Phase badges are optional for AIT Soldiers"
    ],
    correctIndex: 2,
    explanation:
      "Phase badges are not worn off post and must not be attached to phones or other electronic devices."
  },
  {
    category: "Uniforms",
    question:
      "According to the Blue Book, which is TRUE about hydration systems such as Camelbaks?",
    options: [
      "They may be used as extra storage for personal items.",
      "They may be worn with the duty uniform following cadre guidance.",
      "They are never authorized in formation.",
      "They must be removed before entering the DFAC and cannot be in the dining area."
    ],
    correctIndex: 1,
    explanation:
      "Hydration systems may be worn with the uniform IAW cadre guidance and must be used only for hydration, not storage."
  },
  {
    category: "Uniforms",
    question:
      "For civilian water bottles authorized in Phase V+ / VI+, which of the following meets Blue Book requirements?",
    options: [
      "Transparent 12 oz bottle with flip-straw lid and bright neon logo",
      "Solid dark green, double-insulated bottle of at least 24 oz with screw-top lid",
      "Small aluminum energy drink can reused as a bottle",
      "Any color bottle as long as it has a straw"
    ],
    correctIndex: 1,
    explanation:
      "The bottle must be solid black/grey/dark green/tan, double-insulated, screw-top, and at least about 24 oz."
  },
  {
    category: "Uniforms",
    question:
      "Which headgear is normally worn with the ACU in garrison according to the Blue Book?",
    options: [
      "Beret",
      "Patrol cap",
      "Fleece cap at all times",
      "No headgear in garrison"
    ],
    correctIndex: 1,
    explanation:
      "The patrol cap is the standard headgear with the ACU in garrison."
  },

  // ===== APFU / PT =====
  {
    category: "APFU",
    question:
      "Which of the following is NOT authorized while wearing the APFU?",
    options: [
      "Female Soldiers wearing small, spherical earrings",
      "Unit-approved PT shirt with tasteful print",
      "Ruck march in APFU with boots per command guidance",
      "Layering APFU tops based on temperature"
    ],
    correctIndex: 0,
    explanation:
      "Earrings are not authorized with the APFU; they are only authorized with certain dress/duty uniforms for females."
  },
  {
    category: "APFU",
    question:
      "At approximately which temperature does the Blue Book typically require long-sleeve APFU top and pants, possibly with cap and gloves?",
    options: [
      "70°F and above",
      "60–69°F",
      "41–59°F",
      "40°F and below"
    ],
    correctIndex: 3,
    explanation:
      "Around 40°F and below, Soldiers usually wear long-sleeve top, pants, and may add fleece cap and gloves, per unit SOP."
  },

  // ===== GROOMING (MALE) =====
  {
    category: "Grooming (Male)",
    question:
      "Which statement about male hair in the Army is correct according to the Blue Book and AR 670-1?",
    options: [
      "Hair may cover the ears as long as it is neat.",
      "Hair must be tapered/faded and not touch the ears, eyebrows, or collar.",
      "Designs and words shaved into the hair are allowed if professional.",
      "Long braids are authorized for male Soldiers in uniform."
    ],
    correctIndex: 1,
    explanation:
      "Male hair must present a tapered/faded, professional appearance and must not touch the ears, eyebrows, or collar."
  },
  {
    category: "Grooming (Male)",
    question:
      "Which statement about mustaches for male Soldiers is correct?",
    options: [
      "Mustaches may extend past the corners of the mouth as long as they are neat.",
      "Handlebar mustaches are authorized with command approval.",
      "Mustaches must be neatly trimmed and cannot extend beyond the corners of the mouth.",
      "Mustaches are not authorized for male Soldiers in any uniform."
    ],
    correctIndex: 2,
    explanation:
      "Mustaches are allowed but must be neatly trimmed and not extend beyond the corners of the mouth or cover the upper lip."
  },
  {
    category: "Grooming (Male)",
    question:
      "Which of the following is TRUE regarding male facial hair without a profile or religious accommodation?",
    options: [
      "A short beard up to 1 inch is authorized",
      "Sideburns may extend below the bottom of the ear opening",
      "Males must be clean-shaven except for an authorized mustache",
      "Goatees are authorized in garrison only"
    ],
    correctIndex: 2,
    explanation:
      "Male Soldiers must be clean-shaven except for an authorized mustache unless they have a profile or religious accommodation."
  },

  // ===== GROOMING (FEMALE) =====
  {
    category: "Grooming (Female)",
    question:
      "Which of the following female hairstyles is authorized if it allows proper wear of headgear and is not extreme?",
    options: [
      "Bright neon pink hair color in a bun",
      "Natural-colored bun centered on the back of the head within bulk limits",
      "Multi-colored stripes throughout the hair",
      "Ponytail that extends below the bottom of the shoulder blades when standing"
    ],
    correctIndex: 1,
    explanation:
      "Buns are authorized if natural hair color, properly centered, within bulk/width limits, and allow proper wear of headgear."
  },
  {
    category: "Grooming (Female)",
    question:
      "Which statement about female cosmetics and nail polish is correct?",
    options: [
      "Bright neon nail colors are encouraged in garrison.",
      "Females may wear conservative makeup and nail polish that is not extreme.",
      "Any lipstick color is allowed as long as Soldiers are in garrison.",
      "False eyelashes and decorative contacts are always authorized."
    ],
    correctIndex: 1,
    explanation:
      "Makeup and nail polish must be conservative and not extreme; bright/neon or trendy styles are not authorized."
  },
  {
    category: "Grooming (Female)",
    question:
      "Which statement about female fingernails is correct under Army standards?",
    options: [
      "Nails may extend 1 inch beyond the fingertip if painted",
      "Nails must be clean, well-groomed, and not extend past the fingertip length",
      "Black and neon-green colors are encouraged for unit pride",
      "Nails may be any length in garrison but short in the field"
    ],
    correctIndex: 1,
    explanation:
      "Female nails must be clean, well-groomed, and not extend past the fingertip, and nail polish must be conservative."
  },

  // ===== JEWELRY =====
  {
    category: "Jewelry",
    question:
      "How many rings may a Soldier wear according to the Blue Book and AR 670-1?",
    options: [
      "One ring total",
      "Two rings total (wedding set counts as one)",
      "Up to four rings if they are small",
      "No rings in uniform"
    ],
    correctIndex: 1,
    explanation:
      "A Soldier may wear up to two rings total; a traditional wedding set counts as one."
  },
  {
    category: "Jewelry",
    question:
      "Which statement about earrings is correct according to the Blue Book?",
    options: [
      "Male Soldiers may wear one stud earring in each ear in garrison.",
      "Female Soldiers may wear one small spherical earring in each earlobe with the ACU.",
      "Female Soldiers may wear multiple earrings in each ear with the APFU.",
      "Earrings are authorized for both males and females in PT uniform."
    ],
    correctIndex: 1,
    explanation:
      "Female Soldiers may wear one small spherical earring per earlobe with certain uniforms like the ACU; males may not wear earrings."
  },
  {
    category: "Jewelry",
    question:
      "Which of the following combinations follows Army standards for jewelry in uniform?",
    options: [
      "Three rings, two bracelets, and a large watch",
      "Two rings total, one watch, and one conservative bracelet",
      "Four rings as long as they are simple bands",
      "No jewelry is authorized at any time"
    ],
    correctIndex: 1,
    explanation:
      "Soldiers may wear up to two rings, one watch, and one conservative bracelet such as ID or medical."
  },

  // ===== TATTOOS =====
  {
    category: "Tattoos",
    question:
      "Which type of tattoo is prohibited by Army policy and the Blue Book?",
    options: [
      "A small unit crest on the upper arm",
      "A tasteful, non-offensive design on the calf",
      "An extremist or racist tattoo",
      "A single ring tattoo at the base of a finger"
    ],
    correctIndex: 2,
    explanation:
      "Extremist, indecent, sexist, or racist tattoos are prohibited."
  },
  {
    category: "Tattoos",
    question:
      "What is the policy for MOS-I / IET Soldiers (such as AIT trainees) regarding getting new tattoos?",
    options: [
      "They are encouraged to get unit tattoos to build esprit de corps.",
      "They may get tattoos only on weekends.",
      "They are not authorized to obtain new tattoos while in training status.",
      "They may get tattoos as long as they are below the elbows."
    ],
    correctIndex: 2,
    explanation:
      "MOS-I / IET Soldiers are not authorized to obtain new tattoos while in training status."
  },

  // ===== PROHIBITED ITEMS / SAFETY =====
  {
    category: "Safety / Prohibited Items",
    question:
      "Which of the following items is prohibited for AIT Soldiers to possess in the barracks under the Blue Book?",
    options: [
      "Privately owned firearms or ammunition",
      "A personal alarm clock",
      "Study materials for their MOS",
      "A small fan"
    ],
    correctIndex: 0,
    explanation:
      "IET/AIT Soldiers are not allowed to possess privately owned weapons or ammunition."
  },
  {
    category: "Safety / Prohibited Items",
    question:
      "Which of the following is also considered a prohibited item for Soldiers in training?",
    options: [
      "Lock-picking or burglary tools",
      "Earplugs for sleeping",
      "MOS textbooks",
      "Brown or black boot polish"
    ],
    correctIndex: 0,
    explanation:
      "Lock-picking or burglary tools are prohibited items."
  },

  // ===== VEHICLES =====
  {
    category: "Safety / Vehicles",
    question:
      "According to the Blue Book, what is the minimum protective equipment required for Soldiers riding in open-back tactical vehicles?",
    options: [
      "Patrol cap only",
      "ACH (helmet) and gloves",
      "ACH, eye protection, and gloves",
      "No protective equipment is required"
    ],
    correctIndex: 2,
    explanation:
      "In open-back vehicles, Soldiers must wear ACH, eye protection, and gloves."
  },
  {
    category: "Safety / Vehicles",
    question:
      "Who must serve as the truck commander (TC) in a tactical vehicle according to Army standards?",
    options: [
      "Any AIT Soldier with a license",
      "An NCO or Warrant/Commissioned Officer",
      "Any Soldier E-2 and above",
      "A civilian contractor"
    ],
    correctIndex: 1,
    explanation:
      "The TC should be an NCO or a Warrant/Commissioned Officer, not an IET Soldier."
  },

  // ===== RELIGIOUS ACCOMMODATION =====
  {
    category: "Religious Accommodation",
    question:
      "Which of the following statements about beards for religious accommodation is correct?",
    options: [
      "They are never authorized in uniform",
      "They may be authorized and must be kept neat and within length limits",
      "They are authorized only during field exercises",
      "They require no documentation"
    ],
    correctIndex: 1,
    explanation:
      "Beards may be authorized under religious accommodation or profile and must be kept neat and within specified length limits."
  },
  {
    category: "Religious Accommodation",
    question:
      "Which statement about wearing a hijab or turban is correct under Army policy and the Blue Book?",
    options: [
      "They are never allowed with the uniform",
      "They may be worn if approved, and must be in subdued colors compatible with the uniform",
      "They may be any bright color or pattern",
      "They replace all other protective gear"
    ],
    correctIndex: 1,
    explanation:
      "Hijabs and turbans may be worn if approved and must be subdued and compatible with the uniform, not interfering with protective gear."
  },

  // ===== TERRAIN FEATURES – MAJOR & MINOR =====
  {
    category: "Terrain Features",
    question:
      "Which of the following are the 5 major terrain features taught in basic land navigation?",
    options: [
      "Hill, Ridge, Valley, Draw, Spur",
      "Hill, Ridge, Valley, Saddle, Depression",
      "Hill, Ridge, Draw, Spur, Cliff",
      "Valley, Saddle, Depression, Draw, Spur"
    ],
    correctIndex: 1,
    explanation:
      "The 5 major terrain features are Hill, Ridge, Valley, Saddle, and Depression."
  },
  {
    category: "Terrain Features",
    question:
      "Which of the following are the 3 minor terrain features?",
    options: [
      "Hill, Ridge, Valley",
      "Valley, Saddle, Depression",
      "Draw, Spur, Cliff",
      "Ridge, Draw, Spur"
    ],
    correctIndex: 2,
    explanation:
      "The 3 minor terrain features are Draw, Spur, and Cliff."
  },
  {
    category: "Terrain Features",
    question:
      "Which terrain feature is an area of high ground where contour lines form closed circles on the map without tick marks?",
    options: ["Ridge", "Valley", "Hill", "Depression"],
    correctIndex: 2,
    explanation:
      "A hill is an area of high ground represented by closed contour lines with no tick marks."
  },
  {
    category: "Terrain Features",
    question:
      "Which terrain feature is a reasonably level ground along a stream with higher ground on three sides?",
    options: ["Ridge", "Valley", "Saddle", "Draw"],
    correctIndex: 1,
    explanation:
      "A valley is relatively level ground along a stream or river, with higher ground on three sides."
  },
  {
    category: "Terrain Features",
    question:
      "Which terrain feature is a low point between two areas of higher ground, often resembling a horse saddle?",
    options: ["Spur", "Saddle", "Draw", "Cliff"],
    correctIndex: 1,
    explanation:
      "A saddle is the low point between two higher areas of ground."
  },
  {
    category: "Terrain Features",
    question:
      "Which terrain feature is a short, continuous sloping line of higher ground jutting out from a ridge?",
    options: ["Draw", "Spur", "Valley", "Depression"],
    correctIndex: 1,
    explanation:
      "A spur is a short sloping finger of high ground extending from a ridge."
  },
  {
    category: "Terrain Features",
    question:
      "Which terrain feature is a less developed stream course with little or no level ground at the bottom?",
    options: ["Draw", "Ridge", "Saddle", "Hill"],
    correctIndex: 0,
    explanation:
      "A draw is a less developed stream course with little or no level ground at the bottom."
  },
  {
    category: "Terrain Features",
    question:
      "Which terrain feature is a vertical or nearly vertical slope shown on the map where contour lines are very close together or touching?",
    options: ["Valley", "Cliff", "Hill", "Depression"],
    correctIndex: 1,
    explanation:
      "A cliff is a vertical or near-vertical slope represented by very close or touching contour lines."
  }
];

// ====== ONE-BY-ONE QUIZ LOGIC ======

const quizContainer = document.getElementById("quiz-container");
const submitBtn = document.getElementById("submit-answer");
const nextBtn = document.getElementById("next-question");
const restartBtn = document.getElementById("restart-quiz");
const resultBox = document.getElementById("quiz-result");
const progressEl = document.getElementById("quiz-progress");
const scoreSoFarEl = document.getElementById("quiz-score-so-far");

let currentIndex = 0;
let correctCount = 0;
let answeredCount = 0;
let questionGraded = false;

function updateStatusBar() {
  progressEl.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
  scoreSoFarEl.textContent = `Correct so far: ${correctCount}`;
}

function renderCurrentQuestion() {
  const q = questions[currentIndex];

  quizContainer.innerHTML = `
    <article class="question-card">
      <div class="question-header">
        <div class="question-number">Question ${currentIndex + 1}</div>
        <div class="question-category">${q.category}</div>
      </div>
      <p class="question-text">${q.question}</p>
      <ul class="options">
        ${q.options
          .map((opt, optIndex) => {
            const name = `q-${currentIndex}`;
            const id = `q-${currentIndex}-opt-${optIndex}`;
            return `
              <li class="option-item">
                <label class="option-label" for="${id}">
                  <input 
                    type="radio" 
                    id="${id}" 
                    name="${name}" 
                    value="${optIndex}"
                  />
                  <span class="option-text">${opt}</span>
                </label>
              </li>
            `;
          })
          .join("")}
      </ul>
      <div class="explanation" id="exp-${currentIndex}">
        <strong>Explanation:</strong> ${q.explanation}
      </div>
    </article>
  `;

  questionGraded = false;
  submitBtn.disabled = false;
  nextBtn.disabled = true;
  resultBox.classList.remove("visible");
  updateStatusBar();
}

function getSelectedAnswer(index) {
  const name = `q-${index}`;
  const radios = document.querySelectorAll(`input[name="${name}"]`);
  for (const radio of radios) {
    if (radio.checked) {
      return parseInt(radio.value, 10);
    }
  }
  return null;
}

function gradeCurrentQuestion() {
  if (questionGraded) return;

  const q = questions[currentIndex];
  const selected = getSelectedAnswer(currentIndex);

  if (selected === null) {
    // Simple feedback if no answer selected
    resultBox.classList.add("visible");
    resultBox.innerHTML =
      "<strong>Select an answer first</strong> before checking.";
    return;
  }

  const optionInputs = document.querySelectorAll(
    `input[name="q-${currentIndex}"]`
  );
  const explanationEl = document.getElementById(`exp-${currentIndex}`);

  optionInputs.forEach((inputEl) => {
    const label = inputEl.closest(".option-label");
    const value = parseInt(inputEl.value, 10);

    if (value === q.correctIndex) {
      label.classList.add("correct");
    }

    if (value === selected) {
      label.classList.add("selected");
      if (selected !== q.correctIndex) {
        label.classList.add("incorrect");
      }
    }

    // Lock the radios so you can't change after grading
    inputEl.disabled = true;
  });

  answeredCount++;
  if (selected === q.correctIndex) {
    correctCount++;
    resultBox.innerHTML = "<strong>Correct!</strong> Good job.";
  } else {
    resultBox.innerHTML = "<strong>Incorrect.</strong> Review the explanation.";
  }

  resultBox.classList.add("visible");

  if (explanationEl) {
    explanationEl.classList.add("visible");
  }

  questionGraded = true;
  submitBtn.disabled = true;
  nextBtn.disabled = false;

  // If last question, change button text to "Show Results"
  if (currentIndex === questions.length - 1) {
    nextBtn.textContent = "Show Results";
  }

  updateStatusBar();
}

function showFinalResults() {
  quizContainer.innerHTML = "";
  const total = questions.length;
  const scorePercent = Math.round((correctCount / total) * 100);

  resultBox.classList.add("visible");
  resultBox.innerHTML = `
    <strong>Quiz Complete!</strong><br />
    You answered ${correctCount} out of ${total} questions correctly 
    (${isNaN(scorePercent) ? 0 : scorePercent}%).
  `;

  submitBtn.disabled = true;
  nextBtn.disabled = true;
  nextBtn.textContent = "Next Question";
}

function goToNextQuestion() {
  if (!questionGraded) return;

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    renderCurrentQuestion();
    nextBtn.textContent = "Next Question";
  } else {
    showFinalResults();
  }
}

function restartQuiz() {
  currentIndex = 0;
  correctCount = 0;
  answeredCount = 0;
  questionGraded = false;
  submitBtn.disabled = false;
  nextBtn.disabled = true;
  nextBtn.textContent = "Next Question";
  resultBox.classList.remove("visible");
  resultBox.textContent = "";
  renderCurrentQuestion();
}

// Initial render
renderCurrentQuestion();

// Event listeners
submitBtn.addEventListener("click", gradeCurrentQuestion);
nextBtn.addEventListener("click", goToNextQuestion);
restartBtn.addEventListener("click", restartQuiz);
