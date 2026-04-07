import { useEffect, useState } from "react";
import "./Mentors.css";

export default function Mentors() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("mentors")) || [];
    setMentors(stored);
  }, []);

  return (
    <div className="page">
      <h1>Find a Mentor</h1>
      <p>Connect with helpful seniors & professionals.</p>

      {mentors.length === 0 ? (
        <p>No mentors available yet. Be the first to become one!</p>
      ) : (
        mentors.map((m, i) => (
          <div key={i} className="mentor-card">
            <h3>{m.name}</h3>
            <p><b>Expertise:</b> {m.expertise}</p>
            <p>{m.bio}</p>
          </div>
        ))
      )}
    </div>
  );
}
