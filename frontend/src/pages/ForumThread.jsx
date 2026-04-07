import { useParams } from "react-router-dom";
import { useState } from "react";

export default function ForumThread() {
  const { id } = useParams();
  const posts = JSON.parse(localStorage.getItem("forumPosts")) || [];
  const post = posts[id];

  const [reply, setReply] = useState("");

  const addReply = () => {
    post.replies.push(reply);
    posts[id] = post;
    localStorage.setItem("forumPosts", JSON.stringify(posts));
    setReply("");
  };

  return (
    <div className="page">
      <h2>{post.title}</h2>
      <p><b>By:</b> {post.author}</p>

      <h3>Replies:</h3>
      {post.replies.length === 0 ? <p>No replies yet.</p> :
        post.replies.map((r, i) => <p key={i}>• {r}</p>)
      }

      <input value={reply} placeholder="Write a reply..." onChange={(e)=>setReply(e.target.value)} />
      <button className="btn" onClick={addReply}>Reply</button>
    </div>
  );
}
