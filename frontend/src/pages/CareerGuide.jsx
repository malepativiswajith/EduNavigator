import "./CareerGuide.css";

export default function CareerGuide() {
  const careers = [
    {
      title: "Software Engineering",
      salary: "₹6 - 30 LPA",
      skills: "DSA, Web Development, DBMS",
    },
    {
      title: "Data Science",
      salary: "₹7 - 40 LPA",
      skills: "Python, Machine Learning, Statistics",
    },
    {
      title: "Civil Engineering",
      salary: "₹4 - 20 LPA",
      skills: "AutoCAD, Surveying, Structural Design",
    },
  ];

  return (
    <div className="career-container">
      <h1 className="career-title">Career Guide</h1>
      <p className="career-subtitle">
        Explore trending career paths, average salaries, and required skills.
      </p>

      <div className="career-grid">
        {careers.map((career, index) => (
          <div className="career-card" key={index}>
            <h2>{career.title}</h2>
            <p><strong>Average Salary:</strong> {career.salary}</p>
            <p><strong>Required Skills:</strong> {career.skills}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
