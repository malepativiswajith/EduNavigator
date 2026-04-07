import { useState } from "react";
import "./Placements.css";

const colleges = {
  "PES University": { avg: 12, rate: 90, industry: { tech: 50, finance: 20, core: 30 } },
  "BITS Pilani": { avg: 14, rate: 92, industry: { tech: 55, finance: 18, core: 27 } },
  "VIT": { avg: 7, rate: 80, industry: { tech: 40, finance: 22, core: 38 } },
  "SRM": { avg: 6, rate: 75, industry: { tech: 35, finance: 25, core: 40 } }
};

export default function Placements() {
  const [college1, setCollege1] = useState("PES University");
  const [college2, setCollege2] = useState("BITS Pilani");

  return (
    <div className="page">

      <h1 className="title">Placements Comparison Stats</h1>

      <div className="select-row">
        <select value={college1} onChange={(e) => setCollege1(e.target.value)} className="select-box">
          {Object.keys(colleges).map(c => <option key={c}>{c}</option>)}
        </select>

        <select value={college2} onChange={(e) => setCollege2(e.target.value)} className="select-box">
          {Object.keys(colleges).map(c => <option key={c}>{c}</option>)}
        </select>
      </div>

      <div className="stats-section">

        {/* Average Salary Comparison */}
        <div className="card">
          <h3>Average Salary (LPA)</h3>
          <div className="bar-compare">
            <div className="bar-block">
              <div className="bar-fill" style={{ height: colleges[college1].avg * 8 }}></div>
              <span>{college1}</span>
            </div>
            <div className="bar-block">
              <div className="bar-fill" style={{ height: colleges[college2].avg * 8 }}></div>
              <span>{college2}</span>
            </div>
          </div>
        </div>

        {/* Placement Rate */}
        <div className="card">
          <h3>Placement Rate</h3>
          <p><b>{college1}:</b> {colleges[college1].rate}%</p>
          <p><b>{college2}:</b> {colleges[college2].rate}%</p>
        </div>

        {/* Industry Distribution */}
        <div className="card">
          <h3>Industry-wise Distribution (%)</h3>
          <p><b>{college1} - Tech:</b> {colleges[college1].industry.tech}%</p>
          <p><b>{college1} - Finance:</b> {colleges[college1].industry.finance}%</p>
          <p><b>{college1} - Core:</b> {colleges[college1].industry.core}%</p>
        </div>

      </div>
    </div>
  );
}
