import "./Promotions.css";

export default function Promotions() {
  return (
    <div className="promotions-page">
      <h1 className="promotions-title">ADS & PROMOTIONS</h1>

      {/* Featured Promotions */}
      <section className="promo-section">
        <h2>Featured Promotions</h2>
        <div className="promo-grid">
          <div className="promo-card">
            <span className="promo-icon">🎓</span>
            <h3>Flash Sale! 50% Off Courses</h3>
            <button onClick={() => window.open("https://www.coursera.org", "_blank")}>Sign</button>
          </div>

          <div className="promo-card">
            <span className="promo-icon">🤝</span>
            <h3>Refer-a-Friend & Get $20</h3>
            <button onClick={() => window.open("https://www.udemy.com", "_blank")}>Sign</button>
          </div>

          <div className="promo-card">
            <span className="promo-icon">💼</span>
            <h3>Free Webinar: Career Boost</h3>
            <button onClick={() => window.open("https://www.linkedin.com/learning", "_blank")}>Sign</button>
          </div>
        </div>
      </section>

      {/* University Partnerships */}
      <section className="promo-section">
        <h2>University Partnerships</h2>
        <div className="partnership-box">
          <div className="partner-item">
            <strong>🏛 Tech University</strong>
            <p>B.Tech Admissions Open</p>
          </div>

          <div className="partner-item">
            <strong>🌍 Global Solarity</strong>
            <p>Scholarships Available</p>
          </div>

          <button className="learn-more-btn" onClick={() => window.open("https://www.google.com", "_blank")}>
            Learn More
          </button>
        </div>
      </section>

      {/* Exclusive Offers */}
      <section className="promo-section">
        <h2>Exclusive Offers</h2>
        <div className="exclusive-box">
          <div>
            <strong>🎁 Tech University</strong>
            <p>Math, AI, ML, Deep Design Programs</p>
          </div>

          <div className="exclusive-buttons">
            <button onClick={() => window.open("https://example.com/discount", "_blank")}>Student Discount Code</button>
            <button onClick={() => window.open("https://example.com/scholarships", "_blank")}>Scholarship Opportunities</button>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="promo-section">
        <h2>New Arrivals</h2>
        <div className="new-arrivals">
          <div className="new-card">AIML Fellowship <br/> Get $20</div>
          <div className="new-card">Cybersecurity Bootcamp</div>
          <div className="new-card">Colleges</div>
          <div className="new-card">Quiz Series <br/> View Details</div>
          <div className="new-card">Data Science Masterclass <br/> View Details</div>
          <div className="new-card">Career Mentor <br/> Explore Now</div>
        </div>

        <button className="view-all-btn">VIEW ALL DEALS</button>
      </section>
    </div>
  );
}
