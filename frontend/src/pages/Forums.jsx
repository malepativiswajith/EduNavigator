import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Forums.css";

export default function Forums() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("forumPosts")) || [];
    setPosts(savedPosts);
  }, []);

  return (
    <div className="page">
      <h1>Discussion Forums</h1>

      <Link to="/ask" className="btn">+ Ask a Question</Link>

      {posts.length === 0 ? (
        <p>No discussions yet. Be the first to post!</p>
      ) : (
        posts.map((p, index) => (
          <div key={index} className="post-card">
            <h3>{p.title}</h3>
            <p>By: {p.author}</p>
            <p className="small-text">{p.createdAt}</p>
          </div>
        ))
      )}
    </div>
  );
}
