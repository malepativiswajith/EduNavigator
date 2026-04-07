const collegesData = {
  pes: {
    id: "pes",
    name: "PES University",
    location: "Bengaluru, India",
    ranking: "#1 (Engineering)",
    fees: "5 LPA",
    campusImage: "https://upload.wikimedia.org/wikipedia/commons/8/8b/PES_University_Electronic_City_Campus.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5f/PES_University_logo.png",
    overview: `PES University is one of the leading universities in India, known for engineering, research, and innovation.`,
    acceptedExams: ["JEE Main", "PESSAT", "KCET"],
    facilities: ["Library", "Hostel", "Labs", "Sports Complex", "Gym"],
    placementData: [
      { branch: "Computer Science", avg: 16 },
      { branch: "Electronics & Communication", avg: 13 },
      { branch: "Mechanical", avg: 9 },
      { branch: "Civil", avg: 7 }
    ]
  },

  snu: {
    id: "snu",
    name: "Shiv Nadar University",
    location: "Greater Noida, India",
    ranking: "#23",
    fees: "4 LPA",
    campusImage: "https://www.snu.edu.in/sites/default/files/2022-11/snu-campus.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/6c/Shiv_Nadar_University_logo.png",
    overview: `Shiv Nadar University is a multidisciplinary research-oriented university offering diverse academic programs.`,
    acceptedExams: ["SNUSAT", "JEE Main"],
    facilities: ["Library", "Labs", "Hostel", "Sports Complex", "Auditorium"],
    placementData: [
      { branch: "Computer Science", avg: 12 },
      { branch: "Electronics", avg: 9 },
      { branch: "Mechanical", avg: 7 }
    ]
  },

  bits: {
    id: "bits",
    name: "BITS Pilani",
    location: "Pilani, India",
    ranking: "#7",
    fees: "7 LPA",
    campusImage: "https://upload.wikimedia.org/wikipedia/commons/8/8e/BITS_Pilani_Campus.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d4/BITS_Pilani-Logo.svg",
    overview: `BITS Pilani is one of India's most prestigious private universities known for innovation and research.`,
    acceptedExams: ["BITSAT"],
    facilities: ["Library", "Labs", "Hostel", "Research Centers", "Stadium"],
    placementData: [
      { branch: "Computer Science", avg: 18 },
      { branch: "Electronics", avg: 14 },
      { branch: "Mechanical", avg: 10 }
    ]
  }
};

export default collegesData;
