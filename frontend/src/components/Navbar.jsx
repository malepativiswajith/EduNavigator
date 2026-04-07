import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  // Get user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token"); // ✅ Remove JWT token also
    navigate("/login");
    window.location.reload(); // ✅ Refresh UI so button updates
  };

  return (
    <div className="navbar">
      <div className="logo">EDU NAVIGATOR</div>

      <div className="nav-links">
        <Link to="/">Colleges</Link>
        <Link to="/exams">Exams</Link>
        <Link to="/placements">Placements</Link>
        <Link to="/community">Community</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/promotions">Ads</Link>
        <Link to="/scholarships">Scholarships</Link>
        <Link to="/career-guide">Career Guide</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="login-btn">
        {user ? (
          <button onClick={handleLogout} className="logout-btn">
            Logout ({user.name})
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
}
