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
  },
    // ===== LAND NAV / MAP READING =====
  {
    category: "Land Nav",
    question: "Which list correctly shows the 5 major terrain features?",
    options: [
      "Hill, Valley, Saddle, Ridge, Depression",
      "Hill, Valley, Ridge, Draw, Spur",
      "Hill, Ridge, Draw, Spur, Cliff",
      "Valley, Ridge, Draw, Spur, Cliff"
    ],
    correctIndex: 0,
    explanation:
      "The 5 major terrain features are Hill, Valley, Saddle, Ridge, and Depression."
  },
  {
    category: "Land Nav",
    question: "Which list correctly shows the 3 minor terrain features?",
    options: [
      "Hill, Ridge, Valley",
      "Draw, Spur, Cliff",
      "Valley, Saddle, Depression",
      "Hill, Valley, Ridge"
    ],
    correctIndex: 1,
    explanation:
      "The 3 minor terrain features are Draw, Spur, and Cliff."
  },
  {
    category: "Land Nav",
    question: "What are the six basic colors on a military map?",
    options: [
      "Red-Brown, Red, Brown, Green, Blue, Black",
      "Red, Orange, Yellow, Green, Blue, Black",
      "Red, Brown, Yellow, Green, Blue, White",
      "Red-Brown, Red, Green, Blue, Black, White"
    ],
    correctIndex: 0,
    explanation:
      "The six standard colors on a military map are Red-Brown, Red, Brown, Green, Blue, and Black."
  },
  {
    category: "Land Nav",
    question: "Which TC covers map reading and land navigation?",
    options: [
      "TC 3-22.9",
      "TC 3-25.26",
      "TC 7-22",
      "TC 3-20.0"
    ],
    correctIndex: 1,
    explanation:
      "TC 3-25.26 covers Map Reading and Land Navigation."
  },

  // ===== ARMY REGULATIONS / POLICY =====
  {
    category: "Regulations",
    question: "What does AR 600-20 cover?",
    options: [
      "Rifle marksmanship",
      "Army Command Policy, including SHARP and EO",
      "Drill and ceremony",
      "Physical readiness training"
    ],
    correctIndex: 1,
    explanation:
      "AR 600-20 is Army Command Policy and includes SHARP and EO policy."
  },
  {
    category: "Regulations",
    question: "What does AR 600-25 cover?",
    options: [
      "Physical fitness standards",
      "Salutes, honors, and courtesies",
      "Map reading and land navigation",
      "Rifle and carbine"
    ],
    correctIndex: 1,
    explanation:
      "AR 600-25 covers Salutes, Honors, and Courtesies."
  },
  {
    category: "Regulations",
    question:
      "Sexual Harassment/Assault Response and Prevention (SHARP) is primarily covered in which regulations?",
    options: [
      "AR 600-52 and AR 600-20",
      "AR 670-1 and AR 600-9",
      "AR 350-1 and AR 600-9",
      "TC 3-22.9 and TC 3-25.26"
    ],
    correctIndex: 0,
    explanation:
      "SHARP is covered under AR 600-52 and AR 600-20."
  },
  {
    category: "Regulations",
    question: "What does TC 3-22.9 cover?",
    options: [
      "Drill and ceremony",
      "Rifle and carbine",
      "Physical readiness training",
      "Map reading and land navigation"
    ],
    correctIndex: 1,
    explanation:
      "TC 3-22.9 covers Rifle and Carbine marksmanship."
  },
  {
    category: "Regulations",
    question: "What does TCCC stand for?",
    options: [
      "Tactical Casualty Combat Care",
      "Tactical Combat Casualty Care",
      "Tactical Casualty Control Course",
      "Training Combat Casualty Care"
    ],
    correctIndex: 1,
    explanation:
      "TCCC stands for Tactical Combat Casualty Care."
  },
  {
    category: "Regulations",
    question: "What does SMCT stand for?",
    options: [
      "Soldier Manual of Common Tasks",
      "Soldier Mission and Combat Training",
      "Standard Military Combat Tasks",
      "Standard Mission Combat Training"
    ],
    correctIndex: 0,
    explanation:
      "SMCT stands for Soldier Manual of Common Tasks."
  },

  // ===== SHARP & EO =====
  {
    category: "SHARP / EO",
    question: "What are the two options for SHARP sexual assault reporting?",
    options: [
      "Formal and Informal",
      "Open and Closed",
      "Restricted and Unrestricted",
      "Anonymous and Non-Anonymous"
    ],
    correctIndex: 2,
    explanation:
      "SHARP sexual assault reporting options are Restricted and Unrestricted."
  },
  {
    category: "SHARP / EO",
    question:
      "Which statement best describes UNRESTRICTED reporting for SHARP sexual assault?",
    options: [
      "No investigation and no services are allowed",
      "Allows a formal investigation and access to legal and command support",
      "Only medical treatment is allowed, with no documentation",
      "It is an anonymous report that disappears after 30 days"
    ],
    correctIndex: 1,
    explanation:
      "Unrestricted reporting allows command or law enforcement to investigate and provides full services and legal support."
  },
  {
    category: "SHARP / EO",
    question:
      "Which statement best describes RESTRICTED reporting for SHARP sexual assault?",
    options: [
      "Starts an immediate formal investigation",
      "Allows confidential disclosure to specific individuals without starting an investigation",
      "Reports go straight to the media",
      "Restricted reports are not allowed in the Army"
    ],
    correctIndex: 1,
    explanation:
      "Restricted reporting allows victims to confidentially disclose the incident without starting an official investigation."
  },
  {
    category: "SHARP / EO",
    question: "What are the two types of EO complaints?",
    options: [
      "Restricted and Unrestricted",
      "Formal and Informal",
      "Verbal and Written",
      "Anonymous and Non-Anonymous"
    ],
    correctIndex: 1,
    explanation:
      "EO complaint types are Formal and Informal."
  },
  {
    category: "SHARP / EO",
    question: "Is pregnancy mentioned under the Equal Opportunity (EO) program?",
    options: ["Yes", "No"],
    correctIndex: 0,
    explanation:
      "Yes. Pregnancy is addressed under EO protections."
  },
  {
    category: "SHARP / EO",
    question: "What does the acronym SHARP stand for?",
    options: [
      "Sexual Harassment/Assault Response and Prevention",
      "Soldier Health and Readiness Program",
      "Standard Harassment and Resolution Policy",
      "Sexual Harassment and Rights Program"
    ],
    correctIndex: 0,
    explanation:
      "SHARP = Sexual Harassment/Assault Response and Prevention."
  },
  {
    category: "SHARP / EO",
    question: "What are the two types of SHARP sexual harassment complaints?",
    options: [
      "Restricted and Unrestricted",
      "Formal and Informal",
      "Open and Closed",
      "Anonymous and Named"
    ],
    correctIndex: 1,
    explanation:
      "SHARP sexual harassment complaints can be Formal or Informal."
  },

  // ===== FIRST AID / TACTICAL =====
  {
    category: "First Aid",
    question: "What are the basic ways to assist with severe bleeding?",
    options: [
      "Direct pressure, pressure dressing, apply a tourniquet",
      "Apply ice, elevate the limb, give water",
      "Massage the wound, remove clothing, give food",
      "Use only a tourniquet immediately"
    ],
    correctIndex: 0,
    explanation:
      "Bleeding control priorities: direct pressure, pressure dressing, and if needed, a tourniquet."
  },
  {
    category: "First Aid",
    question: "What does ACE stand for in suicide intervention?",
    options: [
      "Act, Call, Escort",
      "Ask, Care, Escort",
      "Alert, Check, Escort",
      "Assess, Confirm, Encourage"
    ],
    correctIndex: 1,
    explanation:
      "ACE = Ask, Care, Escort."
  },

  // ===== WEAPONS / AMMO =====
  {
    category: "Weapons",
    question:
      "What are the two general types of corrective action with weapons?",
    options: [
      "Immediate action and Remedial action",
      "Primary action and Secondary action",
      "Clear action and Safe action",
      "Direct action and Indirect action"
    ],
    correctIndex: 0,
    explanation:
      "Corrective actions are categorized as Immediate Action and Remedial Action."
  },
  {
    category: "Weapons",
    question:
      "According to your study guide, how many different types of ammunition are there?",
    options: ["5", "7", "8", "10"],
    correctIndex: 3,
    explanation:
      "The guide notes 10 different types of ammunition."
  },
  {
    category: "Weapons",
    question:
      "How many types of 5.56mm ammunition are officially listed in your study guide?",
    options: ["3", "5", "7", "10"],
    correctIndex: 2,
    explanation:
      "The guide states there are 7 types of 5.56mm ammunition."
  },

  // ===== UNIFORMS / APPEARANCE =====
  {
    category: "Uniforms",
    question:
      "How many rows and ribbons are worn on the Class B uniform according to your guide?",
    options: [
      "One row, three ribbons",
      "Two rows, six ribbons",
      "Three rows, nine ribbons",
      "Four rows, twelve ribbons"
    ],
    correctIndex: 1,
    explanation:
      "Class B uniform: two rows with six ribbons."
  },
  {
    category: "Uniforms",
    question:
      "Which of the following is NOT authorized with the uniform according to your guide?",
    options: [
      "Spandex shorts",
      "Bandanas",
      "Pearl necklaces",
      "All of the above"
    ],
    correctIndex: 3,
    explanation:
      "The guide notes: do not wear Spandex shorts, bandanas, or pearls with the uniform."
  },
  {
    category: "Uniforms",
    question:
      "When wearing the uniform, in which direction must headgear be worn?",
    options: [
      "Forward",
      "Backward",
      "To the side",
      "Any direction is fine"
    ],
    correctIndex: 0,
    explanation:
      "All headwear must be worn forward in uniform."
  },
  {
    category: "Uniforms",
    question:
      "While wearing civilian clothes, where should Soldiers remove their hats as a matter of courtesy?",
    options: [
      "Outdoors at all times",
      "Indoors in places like dining facilities, movie theaters, or chapels",
      "Only inside barracks rooms",
      "Only in vehicles"
    ],
    correctIndex: 1,
    explanation:
      "Soldiers should remove civilian hats indoors in places like DFACs, theaters, and chapels."
  },
  {
    category: "Uniforms",
    question:
      "Which Starbucks locations are permitted for Phase VI Soldiers according to your guide?",
    options: [
      "Only the main post Starbucks",
      "Troop Store and PX Starbucks",
      "Off-post Starbucks only",
      "Any Starbucks on or off post"
    ],
    correctIndex: 1,
    explanation:
      "Phase VI Soldiers are allowed to use Starbucks at the Troop Store and PX."
  },
  {
    category: "Uniforms",
    question:
      "What is the maximum diameter authorized for female earrings in uniform?",
    options: [
      "4 millimeters (about 1/8 inch)",
      "6 millimeters (about 1/4 inch)",
      "8 millimeters (about 3/8 inch)",
      "10 millimeters (about 1/2 inch)"
    ],
    correctIndex: 1,
    explanation:
      "Female earrings may be up to 6 mm, approximately 1/4 inch in diameter."
  },
  {
    category: "Uniforms",
    question:
      "Can Soldiers wear eyelash extensions in the Army according to your guide?",
    options: [
      "Yes, any time in garrison",
      "Yes, only during weekends",
      "Only if medically prescribed",
      "Never under any circumstances"
    ],
    correctIndex: 2,
    explanation:
      "Eyelash extensions are not authorized unless medically prescribed."
  },
  {
    category: "Uniforms",
    question:
      "For the ASU, how is the name plate placed on the right pocket flap?",
    options: [
      "Centered on the button",
      "Centered on the flap between the top of the button and the top of the pocket",
      "1 inch above the pocket flap",
      "Aligned with the left pocket"
    ],
    correctIndex: 1,
    explanation:
      "ASU name plate: centered on the right pocket flap between the top of the button and the top of the pocket."
  },
  {
    category: "Uniforms",
    question:
      "According to your guide, where is the U.S. Army plate placed on the uniform?",
    options: [
      "1/4 inch above the pocket",
      "Centered on the pocket",
      "5/8 inch above the label notch",
      "Aligned with the nameplate"
    ],
    correctIndex: 2,
    explanation:
      "The U.S. Army plate is placed 5/8 inch above the label notch."
  },

  // ===== TATTOO POLICY (DIRECTIVE 2022-09) =====
  {
    category: "Tattoos",
    question:
      "According to Army Directive 2022-09, how many visible tattoos are allowed on each hand?",
    options: [
      "None are allowed on the hand",
      "One visible tattoo per hand, not extending to fingers or wrist",
      "Two tattoos per hand of any size",
      "Only ring tattoos are allowed"
    ],
    correctIndex: 1,
    explanation:
      "One visible tattoo per hand is allowed, not extending to fingers or wrist, plus ring and between-finger tattoos with restrictions."
  },
  {
    category: "Tattoos",
    question:
      "Under the updated tattoo policy, what is allowed on the back of the neck?",
    options: [
      "No tattoos are allowed anywhere on the neck",
      "One tattoo up to 2 inches in size",
      "Multiple tattoos of any size",
      "Only unit crests"
    ],
    correctIndex: 1,
    explanation:
      "One tattoo up to 2 inches is allowed on the back of the neck."
  },
  {
    category: "Tattoos",
    question:
      "Under the updated tattoo policy, what is allowed behind the ear?",
    options: [
      "No tattoos are allowed behind the ear",
      "One tattoo up to 1 inch that does not extend past the earlobe",
      "Multiple tattoos up to 2 inches",
      "Only ring tattoos"
    ],
    correctIndex: 1,
    explanation:
      "One tattoo up to 1 inch is allowed behind the ear and may not extend past the earlobe."
  },

  // ===== PT / DRILLS / H2F =====
  {
    category: "PT / H2F",
    question: "What does H2F stand for in the Army fitness system?",
    options: [
      "Holistic Health and Fitness",
      "High-Intensity Health and Fitness",
      "Healthy Habits and Fitness",
      "Holistic Human Fitness"
    ],
    correctIndex: 0,
    explanation:
      "H2F stands for Holistic Health and Fitness."
  },
  {
    category: "PT / H2F",
    question: "How many stretches are in the Recovery Drill?",
    options: ["5", "6", "8", "10"],
    correctIndex: 2,
    explanation:
      "There are 8 stretches in the Recovery Drill."
  },
  {
    category: "PT / H2F",
    question:
      "Which list correctly shows all stretches in the Recovery Drill?",
    options: [
      "Overhead Arm Pull, Rear Lunge, Extend and Flex, Thigh Stretch, Single-Leg Over, Groin Stretch, Calf Stretch, Hamstring Stretch",
      "Power Jump, V-Up, Mountain Climber, Leg-Tuck and Twist, Single-Leg Push-Up",
      "Turn and Lunge, Supine Bicycle, Half Jack, Swimmer, 8-count T Push-Up",
      "Deadlift, Hand Release Push-Ups, Sprint Drag Carry, Plank, 2-mile Run"
    ],
    correctIndex: 0,
    explanation:
      "Recovery Drill stretches: Overhead Arm Pull, Rear Lunge, Extend and Flex, Thigh Stretch, Single-Leg Over, Groin Stretch, Calf Stretch, Hamstring Stretch."
  },
  {
    category: "PT / H2F",
    question: "How many ACFT events are listed in your study guide, and in what order?",
    options: [
      "3 events: Deadlift, Plank, 2-mile Run",
      "4 events: Deadlift, Hand Release Push-Ups, Sprint Drag Carry, 2-mile Run",
      "5 events: Deadlift, Hand Release Push-Ups, Sprint Drag Carry, Plank, 2-mile Run",
      "6 events: Deadlift, Standing Power Throw, Hand Release Push-Ups, Sprint Drag Carry, Plank, 2-mile Run"
    ],
    correctIndex: 2,
    explanation:
      "Your guide lists 5 ACFT events in order: Deadlift, Hand Release Push-Ups, Sprint Drag Carry, Plank, 2-mile Run."
  },
  {
    category: "PT / H2F",
    question:
      "Which exercises are listed in Conditioning Drill 1 (CD1) in order?",
    options: [
      "Power Jump, V-Up, Mountain Climber, Leg-Tuck and Twist, Single-Leg Push-Up",
      "Turn and Lunge, Supine Bicycle, Half Jack, Swimmer, 8-count T Push-Up",
      "Straight-Arm Pull, Heel Hook, Pull-Up, Leg-Tuck, Alternating Grip Pull-Up",
      "Overhead Arm Pull, Rear Lunge, Extend and Flex, Thigh Stretch"
    ],
    correctIndex: 0,
    explanation:
      "CD1: Power Jump, V-Up, Mountain Climber, Leg-Tuck and Twist, Single-Leg Push-Up."
  },
  {
    category: "PT / H2F",
    question:
      "Which exercises are listed in Conditioning Drill 2 (CD2) in order?",
    options: [
      "Turn and Lunge, Supine Bicycle, Half Jack, Swimmer, 8-count T Push-Up",
      "Power Jump, V-Up, Mountain Climber, Leg-Tuck and Twist, Single-Leg Push-Up",
      "Straight-Arm Pull, Heel Hook, Pull-Up, Leg-Tuck, Alternating Grip Pull-Up",
      "Overhead Arm Pull, Rear Lunge, Extend and Flex, Thigh Stretch"
    ],
    correctIndex: 0,
    explanation:
      "CD2: Turn and Lunge, Supine Bicycle, Half Jack, Swimmer, 8-count T Push-Up."
  },
  {
    category: "PT / H2F",
    question:
      "Which of the following are listed as climbing drill exercises in your guide?",
    options: [
      "Straight-Arm Pull/Flexed Arm Hang, Heel Hook, Pull-Up, Leg-Tuck, Alternating Grip Pull-Up",
      "Power Jump, V-Up, Mountain Climber, Single-Leg Push-Up",
      "Turn and Lunge, Supine Bicycle, Swimmer",
      "Overhead Arm Pull, Groin Stretch, Hamstring Stretch"
    ],
    correctIndex: 0,
    explanation:
      "Climbing drills: Straight-Arm Pull/Flexed Arm Hang, Heel Hook, Pull-Up, Leg-Tuck, Alternating Grip Pull-Up."
  },
  {
    category: "PT / H2F",
    question: "According to your guide, how many firing positions are there?",
    options: ["3", "4", "5", "6"],
    correctIndex: 2,
    explanation:
      "Your guide states there are 5 firing positions."
  },

  // ===== RANKS / FORMS / PROGRAMS =====
  {
    category: "Ranks / Forms",
    question: "What grade and rank correspond to O-7 in the U.S. Army?",
    options: [
      "O-7: Major General",
      "O-7: Brigadier General",
      "O-7: Lieutenant General",
      "O-7: General"
    ],
    correctIndex: 1,
    explanation:
      "O-7 is Brigadier General."
  },
  {
    category: "Ranks / Forms",
    question: "What grade and rank correspond to O-8 in the U.S. Army?",
    options: [
      "O-8: Brigadier General",
      "O-8: Major General",
      "O-8: Lieutenant General",
      "O-8: General"
    ],
    correctIndex: 1,
    explanation:
      "O-8 is Major General."
  },
  {
    category: "Ranks / Forms",
    question: "What grade and rank correspond to O-9 in the U.S. Army?",
    options: [
      "O-9: Brigadier General",
      "O-9: Major General",
      "O-9: Lieutenant General",
      "O-9: General"
    ],
    correctIndex: 2,
    explanation:
      "O-9 is Lieutenant General."
  },
  {
    category: "Ranks / Forms",
    question:
      "According to your guide, how many NCO ranks are there (from CPL up to SMA)?",
    options: ["7", "8", "9", "10"],
    correctIndex: 2,
    explanation:
      "Your guide lists 9 NCO ranks: CPL, SGT, SSG, SFC, MSG, 1SG, SGM, CSM, SMA."
  },
  {
    category: "Ranks / Forms",
    question:
      "What is the name of the form used as the promotion point worksheet in your guide?",
    options: [
      "DA Form 3355",
      "DD Form 2983",
      "I-PSSA",
      "DA Form 705"
    ],
    correctIndex: 2,
    explanation:
      "Your guide refers to the promotion point worksheet as I-PSSA."
  },
  {
    category: "Ranks / Forms",
    question: "Which form pertains to Army sponsorship?",
    options: [
      "DA Form 705",
      "DA Form 5434",
      "DA Form 5500",
      "DD Form 2983"
    ],
    correctIndex: 1,
    explanation:
      "DA Form 5434 is used for Army sponsorship."
  },
  {
    category: "Ranks / Forms",
    question:
      "Which forms are used for Army body fat assessments according to your guide?",
    options: [
      "DA Form 705 for both males and females",
      "DA Form 5500 for females, DA Form 5501 for males",
      "DA Form 5501 for females, DA Form 5500 for males",
      "DD Form 2983 for both"
    ],
    correctIndex: 2,
    explanation:
      "Body fat: DA Form 5501 for females, DA Form 5500 for males."
  },
  {
    category: "Ranks / Forms",
    question: "What does DD Form 2983 cover?",
    options: [
      "Army physical fitness test scorecard",
      "Recruit/trainee prohibited activities acknowledgment",
      "Army sponsorship",
      "Promotion point worksheet"
    ],
    correctIndex: 1,
    explanation:
      "DD Form 2983 is the Recruit/Trainee Prohibited Activities Acknowledgment."
  },
  {
    category: "Ranks / Forms",
    question: "What is the Army’s birthday?",
    options: [
      "June 14th",
      "July 4th",
      "November 11th",
      "September 18th"
    ],
    correctIndex: 0,
    explanation:
      "The Army’s birthday is June 14th (1775)."
  },
  {
    category: "Ranks / Forms",
    question:
      "According to your guide, what is the off-post radius limit for Soldiers?",
    options: ["10 miles", "20 miles", "30 miles", "50 miles"],
    correctIndex: 2,
    explanation:
      "Your guide states a 30-mile off-post radius."
  },
  {
    category: "Programs",
    question:
      "Which Army program is correctly matched with its purpose: AER?",
    options: [
      "Army Emergency Relief – Financial assistance to Soldiers and families",
      "Army Emergency Relief – Physical fitness program",
      "Army Emergency Relief – Better opportunities for single Soldiers",
      "Army Emergency Relief – Equal opportunity program"
    ],
    correctIndex: 0,
    explanation:
      "AER: Army Emergency Relief, provides financial assistance to Soldiers and families."
  },
  {
    category: "Programs",
    question:
      "Which Army program is correctly matched with its purpose: BOSS?",
    options: [
      "Better Opportunities for Single Soldiers – Quality of life and recreation for single Soldiers",
      "Basic Operations for Soldier Safety – Safety inspections",
      "Brigade Operations Support System – Staff planning",
      "Battlefield Operations Support System – Tactical network"
    ],
    correctIndex: 0,
    explanation:
      "BOSS: Better Opportunities for Single Soldiers, focuses on quality of life, recreation, and community involvement."
  },

  // ===== HISTORY / MOTTO / D&C =====
  {
    category: "History",
    question:
      "Who introduced drill and ceremony into the U.S. Army?",
    options: [
      "George Washington",
      "Baron von Steuben",
      "Ulysses S. Grant",
      "Dwight D. Eisenhower"
    ],
    correctIndex: 1,
    explanation:
      "Baron von Steuben introduced drill and ceremony to the Continental Army."
  },
  {
    category: "History",
    question: "What is the U.S. Army’s motto?",
    options: [
      "Army Strong",
      "Be All You Can Be",
      "This We'll Defend",
      "Duty, Honor, Country"
    ],
    correctIndex: 2,
    explanation:
      "The official motto is: “This We’ll Defend.”"
  },
  {
    category: "History",
    question:
      "What is the first line of the Ordnance Creed according to your guide?",
    options: [
      "As an Ordnance Soldier of the United States Army...",
      "I am an American Soldier...",
      "I will always place the mission first...",
      "I am a warrior and a member of a team..."
    ],
    correctIndex: 0,
    explanation:
      "The first line: “As an Ordnance Soldier of the United States Army...”"
  },

  // ===== BLUE BOOK / POLICY LETTERS / LOCAL =====
  {
    category: "Blue Book / Policy",
    question:
      "What does Policy Letter #15 cover according to your guide?",
    options: [
      "Physical training standards",
      "Privileges and limitations for Soldiers in training",
      "Tattoo and grooming standards",
      "Leave and pass policies"
    ],
    correctIndex: 1,
    explanation:
      "Policy Letter #15: Privileges and Limitations for Soldiers in Training."
  },
  {
    category: "Blue Book / Policy",
    question:
      "According to your guide, Phase V will perform barracks maintenance from 0900-1000 on weekends. Is this statement true or false?",
    options: ["True", "False"],
    correctIndex: 1,
    explanation:
      "The guide notes this statement as False."
  },
  {
    category: "Blue Book / Policy",
    question:
      "As a Phase V Soldier, can your family sign you out and act as your battle buddy, according to your guide?",
    options: ["Yes", "No"],
    correctIndex: 0,
    explanation:
      "Your guide states this is True: family can sign you out and act as your battle buddy for authorized passes."
  },
  {
    category: "Blue Book / Policy",
    question:
      "According to your guide, can you use your cellphone in the DFAC?",
    options: ["Yes", "No"],
    correctIndex: 1,
    explanation:
      "The guide states: you cannot use your cellphone at the DFAC."
  },
  {
    category: "Blue Book / Policy",
    question:
      "Who is the current Sergeant Major of the Army in your study guide?",
    options: [
      "SMA Daniel A. Dailey",
      "SMA Michael R. Weimer",
      "SMA Michael Grinston",
      "SMA Julius W. Gates"
    ],
    correctIndex: 1,
    explanation:
      "Your guide names SMA Michael R. Weimer as the Sergeant Major of the Army."
  },
  {
    category: "Blue Book / Policy",
    question:
      "If wearing headphones at the gym, the ear pads will not exceed what diameter at the widest point?",
    options: [
      "1 inch",
      "1 1/2 inches",
      "2 inches",
      "3 inches"
    ],
    correctIndex: 1,
    explanation:
      "Headphone ear pads must not exceed 1 1/2 inches in diameter."
  },
  {
    category: "Blue Book / Policy",
    question:
      "According to your guide, all tobacco products must be consumed inside authorized smoking areas, including chewing tobacco. True or false?",
    options: ["True", "False"],
    correctIndex: 0,
    explanation:
      "True. All tobacco products, including chewing tobacco, must be used only in authorized smoking areas."
  },
  {
    category: "Blue Book / Policy",
    question:
      "How many days can the First Sergeant (1SG) suspend phase privileges according to your guide?",
    options: ["7 days", "10 days", "14 days", "21 days"],
    correctIndex: 2,
    explanation:
      "The 1SG can suspend phase privileges for up to 14 days."
  },
  {
    category: "Blue Book / Policy",
    question:
      "While walking, which side should the senior NCO or senior Soldier walk on?",
    options: ["Left side", "Right side", "Either side", "Behind the junior Soldier"],
    correctIndex: 1,
    explanation:
      "The senior Soldier normally walks on the right side."
  },
  {
    category: "Blue Book / Policy",
    question:
      "What is the off-post work order website mentioned in your guide?",
    options: [
      "www.armyworkorders.com",
      "www.armyhelpdesk.com",
      "www.armymaintenance.com",
      "www.milsupport.com"
    ],
    correctIndex: 2,
    explanation:
      "Work orders are submitted through www.armymaintenance.com."
  }
];

// --- Shuffle helper and active question set ---

function shuffleQuestions(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// This will be the actual order used in the quiz (randomized)
let quizQuestions = [];

function resetQuestionOrder() {
  const shuffled = shuffleQuestions(questions);   // randomize full pool
  const maxPerRound = 30;                         // 🔹 how many questions per round
  quizQuestions = shuffled.slice(0, Math.min(maxPerRound, shuffled.length));
}
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
  progressEl.textContent = `Question ${currentIndex + 1} of ${quizQuestions.length}`;
  scoreSoFarEl.textContent = `Correct so far: ${correctCount}`;
}

function renderCurrentQuestion() {
  const q = quizQuestions[currentIndex];

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

  const q = quizQuestions[currentIndex];
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
  const total = quizQuestions.length;
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

  if (currentIndex < quizQuestions.length - 1) {
  currentIndex++;
  renderCurrentQuestion();
  nextBtn.textContent = "Next Question";
} else {
  showFinalResults();
}
}

function restartQuiz() {
  resetQuestionOrder();          
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
resetQuestionOrder();
renderCurrentQuestion();

// Event listeners
submitBtn.addEventListener("click", gradeCurrentQuestion);
nextBtn.addEventListener("click", goToNextQuestion);
restartBtn.addEventListener("click", restartQuiz);
