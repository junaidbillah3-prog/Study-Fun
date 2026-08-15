export const questionsData = {
  'life-sciences': [
    {
      id: 1,
      question: "Which organelle is responsible for cellular respiration and ATP production?",
      options: ["Ribosome", "Mitochondrion", "Golgi Body", "Endoplasmic Reticulum"],
      answer: "Mitochondrion",
      explanation: "Mitochondria convert glucose and oxygen into ATP during cellular respiration."
    },
    {
      id: 2,
      question: "During which phase of meiosis does crossing over occur?",
      options: ["Prophase I", "Metaphase I", "Anaphase II", "Telophase I"],
      answer: "Prophase I",
      explanation: "Crossing over occurs between non-sister chromatids during Prophase I to create genetic variation."
    },
    {
      id: 3,
      question: "What is the primary function of DNA replication?",
      options: [
        "To produce RNA",
        "To synthesize proteins",
        "To make an exact copy of DNA before cell division",
        "To repair damaged cell membranes"
      ],
      answer: "To make an exact copy of DNA before cell division",
      explanation: "DNA replication ensures that each daughter cell receives an identical copy of genetic information."
    },
    // Add remaining questions up to 50 here...
  ],
  'physical-sciences': [
    {
      id: 1,
      question: "What is Newton's First Law of Motion also known as?",
      options: ["Law of Acceleration", "Law of Inertia", "Law of Action-Reaction", "Law of Conservation of Energy"],
      answer: "Law of Inertia",
      explanation: "Newton's First Law states an object remains at rest or in uniform motion unless acted upon by a net external force."
    },
    {
      id: 2,
      question: "Which unit is used to measure electric current in a circuit?",
      options: ["Volt", "Ohm", "Ampere", "Watt"],
      answer: "Ampere",
      explanation: "Electric current is measured in Amperes (A), representing the rate of charge flow per second."
    },
    // Add remaining questions up to 50 here...
  ],
  'history': [
    {
      id: 1,
      question: "In which year was the Freedom Charter adopted in Kliptown?",
      options: ["1948", "1955", "1960", "1976"],
      answer: "1955",
      explanation: "The Congress of the People adopted the Freedom Charter on June 26, 1955."
    },
    // Add remaining questions up to 50 here...
  ],
  'mathematics': [
    {
      id: 1,
      question: "What is the derivative of f(x) = x^2 with respect to x?",
      options: ["x", "2x", "x^3 / 3", "2"],
      answer: "2x",
      explanation: "Using the power rule, the derivative of x^n is n*x^(n-1)."
    },
    // Add remaining questions up to 50 here...
  ]
};

/**
 * Utility to shuffle an array and return a random selection of questions.
 * Uses the Fisher-Yates shuffle algorithm.
 */
export function getRandomQuestions(subjectId, count = 10) {
  const list = questionsData[subjectId] || [];
  const shuffled = [...list];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, Math.min(count, shuffled.length));
}
