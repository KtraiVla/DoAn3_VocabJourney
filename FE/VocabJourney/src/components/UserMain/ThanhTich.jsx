import "./ThanhTich.css";
import { Trophy } from "lucide-react";

const achievements = [
  { icon: "🎯", label: "Bước Đầu\nTiên" },
  { icon: "🔥", label: "Chiến Binh\n7 Ngày" },
  { icon: "📚", label: "Bậc Thầy\nTừ Vựng" },
];

export default function ThanhTich() {
  return (
    <div className="achievements-block">
      <div className="achievements-header">
        <div className="header-left">
          <div className="achievements-header-icon">
            <Trophy size={24} color="white" />
          </div>
          <h3>Thành Tích</h3>
        </div>
        <a href="#!" className="db-view-all">
          Xem Tất Cả
        </a>
      </div>
      
      <div className="achievements-grid">
        {achievements.map((a, i) => (
          <div key={i} className="achievement-item">
            <div className="achievement-icon-wrap">
              <span className="achievement-icon">{a.icon}</span>
            </div>
            <p className="achievement-label">{a.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
