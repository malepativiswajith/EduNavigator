import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const handlePost = () => {
    const newPost = { title, author, replies: [] };
    const oldPosts = JSON.parse(localStorage.getItem("forumPosts")) || [];
    oldPosts.push(newPost);
    localStorage.setItem("forumPosts", JSON.stringify(oldPosts));
    navigate("/community/forums");
  };

  return (
    <div className="page">
      <h2>Create New Discussion</h2>
      <input placeholder="Your name" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <input placeholder="Discussion Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button className="btn" onClick={handlePost}>Post</button>
    </div>
  );
}
