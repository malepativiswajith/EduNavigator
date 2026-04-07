import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Ask.css";

export default function Ask() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!title.trim() || !author.trim()) {
      alert("Please fill all fields");
      return;
    }

    const newPost = { title, author };
    const existing = JSON.parse(localStorage.getItem("forumPosts")) || [];
    existing.push(newPost);

    localStorage.setItem("forumPosts", JSON.stringify(existing));
    navigate("/forums"); // Redirect back to forums
  };

  return (
    <div className="page">
      <h1>Ask a Question</h1>
      <p>Share your academic doubt, others will respond.</p>

      <div className="form-box">
        <input
          type="text"
          placeholder="Enter Question Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Your Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <button onClick={handleSubmit}>Post Question</button>
      </div>
    </div>
  );
}
