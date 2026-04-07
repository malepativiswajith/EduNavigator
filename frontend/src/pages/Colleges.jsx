import "./Colleges.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import collegesData from "../data/collegesData";

export default function Colleges() {
  const [search, setSearch] = useState("");
  const [examFilter, setExamFilter] = useState("");
  const [sortOption, setSortOption] = useState("");

  // Convert object → array
  let colleges = Object.values(collegesData);

  // ✅ SEARCH FILTER
  if (search.trim() !== "") {
    colleges = colleges.filter(c =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.location.toLowerCase().includes(search.toLowerCase())
    );
  }

  // ✅ EXAM FILTER
  if (examFilter !== "") {
    colleges = colleges.filter(c =>
      c.acceptedExams.includes(examFilter)
    );
  }

  // ✅ SORT OPTIONS
  if (sortOption === "ranking") {
    colleges = colleges.sort((a, b) =>
      parseInt(a.ranking.replace(/\D/g, "")) -
      parseInt(b.ranking.replace(/\D/g, ""))
    );
  }

  if (sortOption === "fees") {
    colleges = colleges.sort((a, b) =>
      parseInt(a.fees) - parseInt(b.fees)
    );
  }

  if (sortOption === "location") {
    colleges = colleges.sort((a, b) =>
      a.location.localeCompare(b.location)
    );
  }

  return (
    <div className="page">
      <h1 className="title">Find Colleges</h1>

      {/* Filters */}
      <div className="filters">
        <input
          className="search"
          placeholder="Search by College Name or City"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="dropdown"
          onChange={(e) => setExamFilter(e.target.value)}
        >
          <option value="">Filter by Exam Accepted</option>
          <option value="JEE Main">JEE Main</option>
          <option value="PESSAT">PESSAT</option>
          <option value="KCET">KCET</option>
          <option value="BITSAT">BITSAT</option>
          <option value="SNUSAT">SNUSAT</option>
        </select>

        <select
          className="dropdown"
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort by</option>
          <option value="ranking">Ranking</option>
          <option value="fees">Fees</option>
          <option value="location">Location</option>
        </select>
      </div>

      {/* College Cards */}
      <div className="college-grid">
        {colleges.length > 0 ? (
          colleges.map((college) => (
            <div className="college-card" key={college.id}>
              <img src={college.campusImage} alt={college.name} />
              <h2>{college.name}</h2>
              <p><b>Location:</b> {college.location}</p>
              <p><b>Ranking:</b> {college.ranking}</p>
              <p><b>Fees:</b> {college.fees}</p>

              <Link to={`/college/${college.id}`} className="details-btn">
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", marginTop: "30px" }}>
            No colleges match your search or filters.
          </p>
        )}
      </div>
    </div>
  );
}
