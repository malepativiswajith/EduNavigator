import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MentorSignup.css";

export default function MentorSignup() {
  const [name, setName] = useState("");
  const [expertise, setExpertise] = useState("");
  const [bio, setBio] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!name.trim() || !expertise.trim() || !bio.trim()) {
      alert("Please fill all fields");
      return;
    }

    const newMentor = { name, expertise, bio };

    const mentors = JSON.parse(localStorage.getItem("mentors")) || [];
    mentors.push(newMentor);
    localStorage.setItem("mentors", JSON.stringify(mentors));

    alert("Mentor Added!");
    navigate("/mentors");
  };

  return (
    <div className="page">
      <h1>Become a Mentor</h1>
      <p>Share your knowledge with students.</p>

      <div className="form-box">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Area of Expertise (e.g., Programming, NEET, JEE)"
          value={expertise}
          onChange={(e) => setExpertise(e.target.value)}
        />

        <textarea
          placeholder="Short Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
