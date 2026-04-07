import React from "react";
import { useParams } from "react-router-dom";
import examsData from "../data/examsData";
import "../styles/ExamDetail.css";

export default function ExamDetail() {
  const { id } = useParams();
  const exam = examsData[id];

  if (!exam) return <h2 style={{ textAlign: "center" }}>Exam Not Found</h2>;

  return (
    <div className="exam-detail-container">
      <h1>{exam.name}</h1>
      <p className="location">{exam.location}</p>

      <h2>Overview</h2>
      <p>{exam.overview}</p>

      <h2>Eligibility</h2>
      <ul>
        {exam.eligibility.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2>Exam Pattern</h2>
      <table>
        <tr><th>Subject</th><th>No. of Questions</th></tr>
        {exam.examPattern.map((item, i) => (
          <tr key={i}>
            <td>{item.subject}</td>
            <td>{item.questions}</td>
          </tr>
        ))}
      </table>

      <a href={exam.syllabusPDF} target="_blank" rel="noreferrer" className="btn">
        Download Full Syllabus PDF
      </a>
    </div>
  );
}
