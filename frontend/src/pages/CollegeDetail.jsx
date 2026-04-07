import { useParams } from "react-router-dom";
import collegesData from "../data/collegesData";
import "./CollegeDetail.css";

export default function CollegeDetail() {
  const { id } = useParams();
  const college = collegesData[id];

  if (!college) return <h2>College Not Found</h2>;

  return (
    <div className="college-detail-container">

      <div className="header-section">
        <img src={college.logo} alt="College Logo" className="college-logo" />
        <div>
          <h1>{college.name}</h1>
          <p>{college.location}</p>
        </div>
      </div>

      <div className="tabs">
        <button>Overview</button>
        <button>Accepted Exams</button>
        <button>Placement Data</button>
      </div>

      <div className="content">
        <h2>Overview:</h2>
        <p>{college.overview}</p>

        <h2>Accepted Exams:</h2>
        <ul>
          {college.acceptedExams.map((exam, i) => (
            <li key={i}>{exam}</li>
          ))}
        </ul>

        <h2>Facilities:</h2>
        <ul>
          {college.facilities.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        <h2>Placement Data (Average CTC):</h2>
        <div className="placement-chart">
          {college.placementData.map((p, i) => (
            <div key={i} className="bar">
              <div className="value">{p.avg} LPA</div>
              <div className="label">{p.branch}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
