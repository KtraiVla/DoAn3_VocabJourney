import React from "react";
import "./InsightCard.css";

function InsightCard({ title, text, icon, color, bgColor }) {
  return (
    <div className="insight-card" style={{ backgroundColor: bgColor }}>
      <div className="insight-icon" style={{ color: color }}>
        {icon}
      </div>

      <h3 className="insight-title">{title}</h3>

      <p className="insight-text">{text}</p>
    </div>
  );
}

export default InsightCard;
