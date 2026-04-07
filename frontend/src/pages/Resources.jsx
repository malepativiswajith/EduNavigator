import { useState } from "react";
import "./Resources.css";

export default function Resources() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const resources = [
    { title: "JEE Mains Physics Formula Book", type: "pdf", link: "https://www.vedantu.com/jee-main/physics-formulas" },
    { title: "KCET Chemistry Notes", type: "pdf", link: "https://rhchemistry.in/notes" },
    { title: "PESSAT Quantitative Aptitude Guide", type: "pdf", link: "https://pes.edu/syllabus/" },
    { title: "BITSAT Practice Problem Sets", type: "pdf", link: "https://www.examsnet.com/exams/bitsat-previous-question-papers-online" },
    { title: "VITEEE Prep Strategy (Video)", type: "video", link: "https://www.youtube.com/watch?v=uuAAICcArqI" },
    { title: "How to choose your Engineering Branch (Video)", type: "video", link: "https://www.youtube.com/watch?v=bySQKWxdma0" },
    { title: "Roadmap to Software Developer", type: "video", link: "https://www.youtube.com/watch?v=fpwJQ_MJENE" }
  ];

  const filteredResources = resources.filter(item =>
    (filter === "all" || item.type === filter) &&
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="resources-page">

      <h1 className="title">Resources Hub</h1>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Resources"
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* FILTER BUTTONS */}
      <div className="filter-buttons">
        <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>All</button>
        <button className={filter === "pdf" ? "active" : ""} onClick={() => setFilter("pdf")}>PDF</button>
        <button className={filter === "video" ? "active" : ""} onClick={() => setFilter("video")}>Video</button>
      </div>

      {/* RESOURCE CARDS */}
      <div className="resources-grid">
        {filteredResources.map((res, index) => (
          <div className="resource-card" key={index}>
            <h3>{res.title}</h3>
            <span className={`tag ${res.type}`}>{res.type === "pdf" ? "PDF" : "Video"}</span>

            <a href={res.link} target="_blank" rel="noopener noreferrer">
              <button className="btn">{res.type === "pdf" ? "Download" : "Watch"}</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
