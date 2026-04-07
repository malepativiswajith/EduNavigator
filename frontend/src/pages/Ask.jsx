import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Ask() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handlePost = () => {
    const newPost = { title, author };
    const existing = JSON.parse(localStorage.getItem("forumPosts")) || [];
    existing.push(newPost);
    localStorage.setItem("forumPosts", JSON.stringify(existing));

    navigate("/forums");
  };

  return (
    <div className="page">
      <h1>Create New Discussion</h1>

      <input
        type="text"
        placeholder="Discussion Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Your Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <button className="btn" onClick={handlePost}>
        Post
      </button>
    </div>
  );
}
