const examsData = {
  jeemain: {
    name: "JEE Main",
    location: "National Level",
    overview:
      "JEE Main is a national-level engineering entrance exam conducted for admissions into NITs, IIITs and CFTIs.",
    eligibility: [
      "Passed 12th with PCM",
      "75% required for NIT/IIIT admission",
      "Can attempt for 3 consecutive years"
    ],
    examPattern: [
      { subject: "Mathematics", questions: 25 },
      { subject: "Physics", questions: 25 },
      { subject: "Chemistry", questions: 25 }
    ],
    syllabusPDF: "https://jeemain.nta.nic.in/"
  },

  pessat: {
    name: "PESSAT",
    location: "Bengaluru, India",
    overview:
      "PESSAT is conducted by PES University for admission to UG & PG programs.",
    eligibility: ["Minimum 60% in PCM", "No domicile restrictions"],
    examPattern: [
      { subject: "Mathematics", questions: 30 },
      { subject: "Physics", questions: 30 },
      { subject: "Chemistry", questions: 30 },
      { subject: "English", questions: 10 }
    ],
    syllabusPDF: "https://pes.edu/pessat"
  },

  kcet: {
    name: "KCET",
    location: "Karnataka State",
    overview:
      "KCET is conducted for engineering, agriculture & pharmacy college admissions in Karnataka.",
    eligibility: ["Must meet state residency criteria", "Passed 12th with PCM"],
    examPattern: [
      { subject: "Mathematics", questions: 60 },
      { subject: "Physics", questions: 60 },
      { subject: "Chemistry", questions: 60 }
    ],
    syllabusPDF: "https://cetonline.karnataka.gov.in/"
  },

  viteee: {
    name: "VITEEE",
    location: "National",
    overview:
      "Entrance exam for admission into VIT University UG courses.",
    eligibility: [
      "Minimum 60% in PCM",
      "Passed 12th or equivalent"
    ],
    examPattern: [
      { subject: "Math/Biology", questions: 40 },
      { subject: "Physics", questions: 35 },
      { subject: "Chemistry", questions: 35 },
      { subject: "Aptitude", questions: 10 }
    ],
    syllabusPDF: "https://viteee.vit.ac.in/"
  },

  bitsat: {
    name: "BITSAT",
    location: "National",
    overview:
      "Online entrance exam for admission to BITS Pilani and its campuses.",
    eligibility: [
      "Passed 12th with PCM",
      "Minimum 75% aggregate in PCM"
    ],
    examPattern: [
      { subject: "Math", questions: 45 },
      { subject: "Physics", questions: 40 },
      { subject: "Chemistry", questions: 40 },
      { subject: "English + Logical Reasoning", questions: 25 }
    ],
    syllabusPDF: "https://www.bitsadmission.com/"
  },

  comedk: {
    name: "COMEDK",
    location: "Karnataka",
    overview:
      "COMEDK UGET is conducted for admission to private engineering colleges in Karnataka.",
    eligibility: [
      "Passed 12th with PCM",
      "No state domicile requirement"
    ],
    examPattern: [
      { subject: "Mathematics", questions: 60 },
      { subject: "Physics", questions: 60 },
      { subject: "Chemistry", questions: 60 }
    ],
    syllabusPDF: "https://www.comedk.org/"
  }
};

export default examsData;
