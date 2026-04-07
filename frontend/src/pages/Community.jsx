import { useNavigate } from "react-router-dom";
import "./Community.css";

export default function Community() {
  const navigate = useNavigate();

  return (
    <div className="page community">

      <h1 className="title">Student Community</h1>

      <div className="community-sections">

        {/* Discussion & Q&A */}
        <div className="section-box">
          <h2>Discussion Forums</h2>
          <p>Browse popular threads</p>
          <button className="btn" onClick={() => navigate("/forums")}>
            Browse Forums
          </button>

          <h2 style={{ marginTop: "25px" }}>Q&A (Questions & Answers)</h2>
          <p>Post a new question or help others</p>
          <button className="btn" onClick={() => navigate("/ask")}>
            Ask a Question
          </button>
        </div>

        {/* Resources + Mentorship */}
        <div className="section-box">
          <h2>Resources Hub</h2>
          <p>Guides (PDFs)</p>
          <p>Videos & Tutorials</p>
          <button className="btn" onClick={() => navigate("/resources")}>
            View Resources
          </button>

          <h2 style={{ marginTop: "25px" }}>Mentorship</h2>
          <p>Get guidance from seniors and professionals</p>

          <div className="mentor-buttons">
            <button className="btn" onClick={() => navigate("/mentors")}>
              Find a Mentor
            </button>

            <button className="btn" onClick={() => navigate("/mentor-signup")}>
              Become a Mentor
            </button>
          </div>
        </div>

      </div>

      <h2 className="sub-title">Explore Resources</h2>

      <div className="resource-grid">

  <a className="resource-card" 
     href="https://www.khanacademy.org/math" 
     target="_blank" rel="noopener noreferrer">
     Mathematics
  </a>

  <a className="resource-card" 
     href="https://www.khanacademy.org/science/physics" 
     target="_blank" rel="noopener noreferrer">
     Physics
  </a>

  <a className="resource-card" 
     href="https://www.khanacademy.org/science/chemistry" 
     target="_blank" rel="noopener noreferrer">
     Chemistry
  </a>

  <a className="resource-card" 
     href="https://www.biologyonline.com/dictionary/botany" 
     target="_blank" rel="noopener noreferrer">
     Botany
  </a>

  <a className="resource-card" 
     href="https://www.khanacademy.org/economics-finance-domain" 
     target="_blank" rel="noopener noreferrer">
     Economics
  </a>

  <a className="resource-card" 
     href="https://www.biologyonline.com/dictionary/zoology" 
     target="_blank" rel="noopener noreferrer">
     Zoology
  </a>

</div>

    </div>
  );
}
