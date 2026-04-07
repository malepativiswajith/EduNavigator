import React from "react";
//import "../styles/Scholarships.css";

const Scholarships = () => {
  const scholarships = [
    {
      name: "National Scholarship Portal (NSP)",
      eligible: "Students scoring above 75% in Class 12",
      amount: "₹20,000 - ₹80,000 per year",
      link: "https://scholarships.gov.in/"
    },
    {
      name: "AICTE Pragati Scholarship",
      eligible: "Girl students in technical education",
      amount: "₹50,000 per year",
      link: "https://www.aicte-india.org/"
    },
    {
      name: "State Merit Scholarship",
      eligible: "Students based on State Board Rankings",
      amount: "Varies by state",
      link: "#"
    }
  ];

  return (
    <div className="scholarships-container">
      <h1>Scholarships</h1>
      <p className="subtitle">Financial support programs for students</p>

      {scholarships.map((s, index) => (
        <div key={index} className="scholarship-card">
          <h2>{s.name}</h2>
          <p><strong>Eligibility:</strong> {s.eligible}</p>
          <p><strong>Amount:</strong> {s.amount}</p>
          <a href={s.link} target="_blank" rel="noreferrer">Apply Now</a>
        </div>
      ))}
    </div>
  );
};

export default Scholarships;
