import "./CongDong.css";
import { Users } from "lucide-react";

const stats = [
  { value: "10,452", label: "Người Học Tích Cực", emoji: "👥", type: "green" },
  { value: "2.5M", label: "Từ Vựng Đã Học Hôm Nay", emoji: "📚", type: "blue" },
];

export default function CongDong() {
  return (
    <div className="community-block">
      <div className="community-header">
        <div className="community-header-icon">
          <Users size={24} color="white" />
        </div>
        <h3>Cộng Đồng</h3>
      </div>
      
      <div className="community-stats">
        {stats.map((s, i) => (
          <div key={i} className={`community-stat-row row-${s.type}`}>
            <div className="stat-info">
              <p className="stat-big">{s.value}</p>
              <p className="stat-label">{s.label}</p>
            </div>
            <span className="stat-emoji">{s.emoji}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
