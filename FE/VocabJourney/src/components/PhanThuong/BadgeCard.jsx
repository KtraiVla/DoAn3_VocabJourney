import { Lock } from "lucide-react";
import "./BadgeCard.css";

export default function BadgeCard({
  name,
  description,
  date,
  icon,
  unlocked,
  bgColor,
  borderColor,
}) {
  return (
    <div
      className={`badge-card ${unlocked ? "unlocked" : "locked"}`}
      style={
        unlocked
          ? { backgroundColor: bgColor, border: `2px solid ${borderColor}` }
          : {}
      }
    >
      <div className="badge-icon-container">{icon}</div>
      <h4 className="badge-name">{name}</h4>
      <p className="badge-desc">{description}</p>

      <div className="badge-status">
        {unlocked ? (
          <span className="unlocked-date">Đạt được {date}</span>
        ) : (
          <div className="locked-info">
            <Lock size={12} />
            <span>Chưa mở</span>
          </div>
        )}
      </div>
    </div>
  );
}
