import "./Exams.css";
import { Link } from "react-router-dom";

export default function Exams() {
  return (
    <div className="page">
      <h1 className="exam-title">Explore Engineering Entrance Exams</h1>

      <div className="exam-search-wrapper">
        <input className="exam-search" placeholder="Search by Exam Name" />
      </div>

      <div className="exam-grid">

        <div className="exam-card">
          <h2>PESSAT</h2>
          <p><b>Conducting Body:</b> PES University</p>
          <p><b>Level:</b> National</p>
          <Link to="/exam/pessat" className="exam-btn">View Details</Link>
        </div>

        <div className="exam-card">
          <h2>JEE MAIN</h2>
          <p><b>Conducting Body:</b> NTA</p>
          <p><b>Level:</b> National</p>
          {/* FIXED LINK */}
          <Link to="/exam/jeemain" className="exam-btn">View Details</Link>
        </div>

        <div className="exam-card">
          <h2>KCET</h2>
          <p><b>Conducting Body:</b> KEA</p>
          <p><b>Level:</b> Karnataka</p>
          <Link to="/exam/kcet" className="exam-btn">View Details</Link>
        </div>

        <div className="exam-card">
          <h2>VITEEE</h2>
          <p><b>Conducting Body:</b> VIT University</p>
          <p><b>Level:</b> National</p>
          {/* We'll add VITEEE data later */}
          <Link to="/exam/viteee" className="exam-btn">View Details</Link>
        </div>

        <div className="exam-card">
          <h2>BITSAT</h2>
          <p><b>Conducting Body:</b> BITS Pilani</p>
          <p><b>Level:</b> National</p>
          {/* We'll add BITSAT data later */}
          <Link to="/exam/bitsat" className="exam-btn">View Details</Link>
        </div>

        <div className="exam-card">
          <h2>COMEDK</h2>
          <p><b>Conducting Body:</b> COMEDK</p>
          <p><b>Level:</b> National</p>
          {/* We'll add COMEDK data later */}
          <Link to="/exam/comedk" className="exam-btn">View Details</Link>
        </div>

      </div>
    </div>
  );
}
